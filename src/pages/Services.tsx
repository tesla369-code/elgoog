import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Code, Palette, TrendingUp, Film, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookCallDialog } from "@/components/ui/book-call-dialog";

const services = [
  {
    icon: Code,
    title: "Product Development",
    description: "Modern web apps, mobile apps, SaaS platforms, and scalable systems built with cutting-edge frameworks.",
    items: ["Web Development", "Mobile Apps", "WordPress", "SaaS & Admin Panels"],
    details: "We build robust, scalable digital products using React, Next.js, Node.js, and modern cloud infrastructure. From MVPs to enterprise solutions.",
  },
  {
    icon: Palette,
    title: "Design & Branding",
    description: "Beautiful, user-centered design that captures your brand essence and converts visitors into customers.",
    items: ["UI/UX Design", "Design Systems", "Landing Pages", "Brand Identity"],
    details: "Our design process focuses on user research, wireframing, prototyping, and pixel-perfect implementation in Figma.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Marketing",
    description: "Data-driven marketing strategies to boost your visibility and drive qualified leads to your business.",
    items: ["Technical SEO", "Content SEO", "Social Media", "YouTube Automation"],
    details: "We combine technical expertise with creative marketing to help you rank higher, reach more customers, and grow sustainably.",
  },
  {
    icon: Film,
    title: "Media Production",
    description: "High-quality video content that tells your story and engages your audience across all platforms.",
    items: ["Video Editing", "Short-form Content", "Explainer Videos", "Ads & Reels"],
    details: "From concept to final cut, we produce engaging video content optimized for social media, ads, and brand storytelling.",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description: "Leverage AI and no-code tools to automate workflows, build MVPs fast, and scale your operations.",
    items: ["AI Chatbots", "No-code Apps", "Workflow Automation", "Internal Tools"],
    details: "We integrate AI solutions and automation tools to streamline your operations and reduce manual work by up to 80%.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Services</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
                Full-Service Digital <span className="text-gradient">Solutions</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                From concept to launch and beyond, we handle every aspect of your digital presence 
                with a modern, AI-powered approach.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} direction={index % 2 === 0 ? "left" : "right"}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>
                    <p className="text-foreground/80 mb-8">
                      {service.details}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <BookCallDialog>
                      <Button variant="hero" size="lg">
                        Get Started <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </BookCallDialog>
                  </div>
                  <div className={`glass rounded-3xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-video bg-secondary/50 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-primary/30" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="glass rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ready to <span className="text-gradient">Transform</span> Your Business?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Let's discuss how our services can help you achieve your goals. Book a free strategy call today.
              </p>
              <BookCallDialog>
                <Button variant="hero" size="xl">
                  Book a Free Strategy Call
                </Button>
              </BookCallDialog>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
