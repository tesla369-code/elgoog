import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  company: z.string().trim().max(100, "Company name is too long").optional(),
  message: z.string().trim().max(500, "Message is too long").optional(),
});

interface BookCallDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "02:00 PM", "03:00 PM", "04:00 PM",
];

const BookCallDialog = ({ isOpen, onClose }: BookCallDialogProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep1 = () => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async () => {
    if (!formData.date || !formData.time) {
      toast({
        title: "Please select a date and time",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setStep(3);
    
    toast({
      title: "Call Scheduled! 🎉",
      description: `We'll meet on ${formData.date} at ${formData.time}. Check your email for confirmation.`,
    });
  };

  const handleClose = () => {
    setStep(1);
    setFormData({ name: "", email: "", company: "", message: "", date: "", time: "" });
    setErrors({});
    onClose();
  };

  // Generate next 7 available weekdays
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let count = 0;
    
    while (dates.length < 7) {
      const date = new Date(today);
      date.setDate(today.getDate() + count + 1);
      const day = date.getDay();
      
      if (day !== 0 && day !== 6) { // Skip weekends
        dates.push({
          label: date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
          value: date.toISOString().split("T")[0],
        });
      }
      count++;
    }
    
    return dates;
  };

  const availableDates = getAvailableDates();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 p-4"
          >
            <div className="glass rounded-2xl border border-border/50 overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">Book a Strategy Call</h3>
                    <p className="text-sm text-muted-foreground">30-min free consultation</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Step Indicator */}
              <div className="flex items-center gap-2 px-6 pt-4">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      s <= step ? "bg-primary" : "bg-secondary"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 rounded-lg bg-secondary border ${
                            errors.name ? "border-destructive" : "border-transparent"
                          } focus:border-primary focus:outline-none transition-colors`}
                        />
                        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 rounded-lg bg-secondary border ${
                            errors.email ? "border-destructive" : "border-transparent"
                          } focus:border-primary focus:outline-none transition-colors`}
                        />
                        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Company (optional)</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="w-full px-4 py-3 rounded-lg bg-secondary border border-transparent focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1.5 block">What do you need help with?</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project..."
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg bg-secondary border border-transparent focus:border-primary focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <Button onClick={handleNext} className="w-full" variant="hero" size="lg">
                        Choose Date & Time
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Date Selection */}
                      <div>
                        <label className="text-sm font-medium mb-3 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          Select a Date
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {availableDates.map((date) => (
                            <button
                              key={date.value}
                              onClick={() => setFormData((prev) => ({ ...prev, date: date.label }))}
                              className={`p-2 rounded-lg text-xs font-medium transition-all ${
                                formData.date === date.label
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-secondary hover:bg-secondary/80"
                              }`}
                            >
                              {date.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time Selection */}
                      <div>
                        <label className="text-sm font-medium mb-3 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          Select a Time (EST)
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setFormData((prev) => ({ ...prev, time }))}
                              className={`p-3 rounded-lg text-sm font-medium transition-all ${
                                formData.time === time
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-secondary hover:bg-secondary/80"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          onClick={() => setStep(1)}
                          variant="outline"
                          className="flex-1"
                        >
                          Back
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          variant="hero"
                          className="flex-1"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Scheduling...
                            </>
                          ) : (
                            <>
                              Confirm Booking
                              <CheckCircle2 className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-display font-semibold text-xl mb-2">You're All Set!</h4>
                      <p className="text-muted-foreground text-sm mb-6">
                        We've sent a confirmation to <span className="text-foreground">{formData.email}</span>.
                        <br />
                        See you on <span className="text-primary font-medium">{formData.date}</span> at{" "}
                        <span className="text-primary font-medium">{formData.time}</span>.
                      </p>
                      <Button onClick={handleClose} variant="hero">
                        Close
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookCallDialog;
