import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CheckCircle2, Zap, Users, Target, Rocket, Heart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookCallDialog } from "@/components/ui/book-call-dialog";

const values = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We move fast without breaking things. Rapid iterations, quick turnarounds, and agile methodologies keep your project on track.",
  },
  {
    icon: Users,
    title: "Full Transparency",
    description: "No hidden fees, no fake experience claims. Real people with real portfolios. You'll always know who's working on your project.",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "We don't just build—we solve real business problems and drive measurable growth. Every decision is tied to your goals.",
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and AI tools to deliver solutions that are future-ready and ahead of the curve.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description: "We treat your business as our own. Your success is our success, and we're invested in your long-term growth.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "As students and lifelong learners, we stay updated with the latest trends, tools, and best practices in the industry.",
  },
];

const milestones = [
  { year: "2023", title: "Founded", description: "Nexora was born from a shared vision of engineering students" },
  { year: "2023", title: "First Clients", description: "Delivered successful projects for startups and local businesses" },
  { year: "2024", title: "Team Growth", description: "Expanded to a full-service digital team with diverse expertise" },
  { year: "2024", title: "AI Integration", description: "Pioneered AI-powered workflows and automation solutions" },
  { year: "2025", title: "Global Reach", description: "Serving clients across multiple countries and industries" },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Team Members" },
  { value: "100%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Us</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
                Built by Engineers, <span className="text-gradient">Driven by Innovation</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                We're a next-generation digital agency founded by software engineering students who believe 
                in learning by doing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Nexora was founded by a group of passionate software engineering students who saw a gap 
                    in the market. While others talked about the future of tech, we decided to build it.
                  </p>
                  <p>
                    We combine traditional development expertise with AI-powered tools and automation to deliver 
                    premium digital solutions at startup-friendly prices. No corporate overhead, no outdated 
                    processes—just a young, skilled team ready to grow with your business.
                  </p>
                  <p>
                    Our approach is simple: we treat every project as if it were our own. We're transparent 
                    about our journey, honest about our capabilities, and committed to delivering real value.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="glass rounded-2xl p-6 text-center">
                    <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Values</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
                What <span className="text-gradient">Drives</span> Us
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="glass rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Journey</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
                Key <span className="text-gradient">Milestones</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm text-primary font-semibold mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-display font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
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
                Want to <span className="text-gradient">Work Together</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                We're always excited to meet new clients and tackle challenging projects. 
                Let's discuss how we can help you achieve your goals.
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

export default About;
