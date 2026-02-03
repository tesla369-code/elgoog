import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" style={{ background: "var(--gradient-glow)" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground">Available for new projects</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Ready to Build Something{" "}
            <span className="text-gradient">Extraordinary?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with modern digital solutions. 
            Book a free strategy call—no strings attached.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="group">
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Contact Methods */}
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="mailto:hello@nexora.agency" 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span>hello@nexora.agency</span>
            </a>
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
