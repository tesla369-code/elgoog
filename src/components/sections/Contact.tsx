import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, MessageCircle, Phone, Mail, MapPin, 
  Send, Clock, CheckCircle2, Loader2, Calendar,
  Linkedin, Twitter, Instagram, Github
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BookCallDialog } from "@/components/ui/book-call-dialog";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  subject: z.string().trim().min(2, "Subject is required").max(200, "Subject is too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
});

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/nexora", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/nexora", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/nexora", label: "Instagram" },
  { icon: Github, href: "https://github.com/nexora", label: "GitHub" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      formSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        return;
      }
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent! 🎉",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Nexora! I'm interested in your digital services.");
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" style={{ background: "var(--gradient-glow)" }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm mb-8 border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground">Available for new projects</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Let's Build Something{" "}
            <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Drop us a message or book a free strategy call.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 border border-border/50">
              {!isSubmitted ? (
                <>
                  <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
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
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg bg-secondary border ${
                          errors.subject ? "border-destructive" : "border-transparent"
                        } focus:border-primary focus:outline-none transition-colors`}
                      >
                        <option value="">Select a topic</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="SEO & Marketing">SEO & Marketing</option>
                        <option value="AI & Automation">AI & Automation</option>
                        <option value="Video Production">Video Production</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, and timeline..."
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg bg-secondary border ${
                          errors.message ? "border-destructive" : "border-transparent"
                        } focus:border-primary focus:outline-none transition-colors resize-none`}
                      />
                      {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      variant="hero" 
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-xl mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground text-sm mb-6">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Column - Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Quick Actions */}
            <div className="glass rounded-2xl p-6 border border-border/50">
              <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <BookCallDialog>
                  <Button 
                    variant="hero" 
                    className="w-full justify-start" 
                    size="lg"
                  >
                    <Calendar className="w-5 h-5 mr-3" />
                    Book a Free Strategy Call
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Button>
                </BookCallDialog>
                <Button 
                  variant="heroOutline" 
                  className="w-full justify-start" 
                  size="lg"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="glass rounded-2xl p-6 border border-border/50">
              <h3 className="font-display font-semibold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:hello@nexora.agency" 
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">hello@nexora.agency</p>
                  </div>
                </a>

                <a 
                  href="tel:+1234567890" 
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+1 (234) 567-890</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Remote-First, Global Team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6 border border-border/50">
              <h3 className="font-display font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:scale-105 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
              <Clock className="w-5 h-5 text-primary" />
              <p className="text-sm">
                <span className="font-medium text-primary">Average response time:</span>{" "}
                <span className="text-muted-foreground">Under 4 hours during business hours</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
