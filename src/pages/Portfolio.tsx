import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookCallDialog } from "@/components/ui/book-call-dialog";

const categories = ["All", "Web", "App", "Design", "SEO", "Automation", "Media"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    problem: "A retail startup needed a modern, scalable e-commerce solution to compete with established players.",
    solution: "Built a custom React-based storefront with headless CMS, integrated payment processing, and automated inventory management.",
    tools: ["React", "Next.js", "Stripe", "Sanity CMS", "Tailwind CSS"],
    outcome: "300% increase in online sales within 3 months of launch.",
    type: "Client Project",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    problem: "A B2B company struggled with managing customer data across multiple spreadsheets.",
    solution: "Developed a comprehensive SaaS dashboard with real-time analytics, user management, and automated reporting.",
    tools: ["React", "Node.js", "PostgreSQL", "Chart.js", "AWS"],
    outcome: "Reduced data management time by 80% and improved team productivity.",
    type: "Client Project",
  },
  {
    id: 3,
    title: "Brand Identity System",
    category: "Design",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    problem: "A tech startup lacked a cohesive brand identity, making it hard to stand out in a crowded market.",
    solution: "Created a complete brand identity including logo, color palette, typography, and comprehensive brand guidelines.",
    tools: ["Figma", "Adobe Illustrator", "Brand Strategy"],
    outcome: "Unified brand presence across all touchpoints, increasing brand recognition by 150%.",
    type: "Client Project",
  },
  {
    id: 4,
    title: "SEO Optimization Campaign",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    problem: "A local service business was invisible in search results, losing potential customers to competitors.",
    solution: "Implemented comprehensive technical SEO, local SEO optimization, and content strategy.",
    tools: ["SEMrush", "Ahrefs", "Google Search Console", "Schema Markup"],
    outcome: "First page rankings for 15+ target keywords, 400% increase in organic traffic.",
    type: "Client Project",
  },
  {
    id: 5,
    title: "Workflow Automation System",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    problem: "A marketing agency spent hours on repetitive tasks like reporting and client communication.",
    solution: "Built custom automation workflows connecting their tools and eliminating manual data entry.",
    tools: ["n8n", "Zapier", "Make", "Custom APIs", "Slack Integration"],
    outcome: "Saved 20+ hours per week, allowing team to focus on creative work.",
    type: "Client Project",
  },
  {
    id: 6,
    title: "Promotional Video Series",
    category: "Media",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    problem: "A fitness brand needed engaging video content to boost social media presence.",
    solution: "Produced a series of short-form videos optimized for Instagram Reels and TikTok.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    outcome: "Videos generated 2M+ views and 50K new followers in 2 months.",
    type: "Client Project",
  },
  {
    id: 7,
    title: "AI Chatbot Integration",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    problem: "A customer service team was overwhelmed with repetitive inquiries.",
    solution: "Developed an AI-powered chatbot that handles common questions and routes complex issues to humans.",
    tools: ["OpenAI", "LangChain", "Node.js", "MongoDB"],
    outcome: "Reduced support tickets by 60% while improving response times.",
    type: "Demo Project",
  },
  {
    id: 8,
    title: "Mobile Fitness App",
    category: "App",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
    problem: "Users needed a simple way to track workouts and monitor progress on the go.",
    solution: "Built a cross-platform mobile app with workout tracking, progress charts, and social features.",
    tools: ["React Native", "Firebase", "Redux", "Expo"],
    outcome: "10K+ downloads in first month with 4.8 star rating.",
    type: "Concept Project",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Work</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
                Featured <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Explore our portfolio of web apps, mobile solutions, branding projects, and automation systems.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1}>
                  <div className="glass rounded-3xl overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                      {/* Image */}
                      <div className={`relative aspect-video lg:aspect-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                            {project.type}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-primary text-sm font-semibold">{project.category}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
                          {project.title}
                        </h3>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">Problem</h4>
                            <p className="text-muted-foreground text-sm">{project.problem}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">Solution</h4>
                            <p className="text-muted-foreground text-sm">{project.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">Tools & Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-3 py-1 rounded-full text-xs bg-secondary text-foreground"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">Outcome</h4>
                            <p className="text-foreground font-medium">{project.outcome}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="glass rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Have a Project in <span className="text-gradient">Mind</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Let's bring your vision to life. Book a free consultation and let's discuss 
                how we can help you achieve your goals.
              </p>
              <BookCallDialog>
                <Button variant="hero" size="xl">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
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

export default Portfolio;
