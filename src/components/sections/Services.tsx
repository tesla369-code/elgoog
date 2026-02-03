import { motion } from "framer-motion";
import { Code, Palette, TrendingUp, Film, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Product Development",
    description: "Modern web apps, mobile apps, SaaS platforms, and scalable systems built with cutting-edge frameworks.",
    items: ["Web Development", "Mobile Apps", "WordPress", "SaaS & Admin Panels"],
  },
  {
    icon: Palette,
    title: "Design & Branding",
    description: "Beautiful, user-centered design that captures your brand essence and converts visitors into customers.",
    items: ["UI/UX Design", "Design Systems", "Landing Pages", "Brand Identity"],
  },
  {
    icon: TrendingUp,
    title: "Growth & Marketing",
    description: "Data-driven marketing strategies to boost your visibility and drive qualified leads to your business.",
    items: ["Technical SEO", "Content SEO", "Social Media", "YouTube Automation"],
  },
  {
    icon: Film,
    title: "Media Production",
    description: "High-quality video content that tells your story and engages your audience across all platforms.",
    items: ["Video Editing", "Short-form Content", "Explainer Videos", "Ads & Reels"],
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description: "Leverage AI and no-code tools to automate workflows, build MVPs fast, and scale your operations.",
    items: ["AI Chatbots", "No-code Apps", "Workflow Automation", "Internal Tools"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            Full-Service Digital <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From concept to launch and beyond, we handle every aspect of your digital presence 
            with a modern, AI-powered approach.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover ${
                index === 4 ? "lg:col-span-1 md:col-span-2 lg:col-start-2" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Service Items */}
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
