import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Code2, TestTube, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business, goals, and challenges to understand exactly what you need.",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "We craft a tailored roadmap combining the right tech, design, and growth tactics.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Beautiful, user-centered interfaces that align with your brand and convert visitors.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Clean, scalable code using modern frameworks and AI-powered automation.",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Rigorous QA across devices and scenarios to ensure everything works flawlessly.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Smooth deployment with monitoring, optimization, and launch support.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Ongoing support, analytics, and iterations to help you scale and succeed.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            Our Proven <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A streamlined, transparent approach that takes you from idea to launch—and beyond.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Card */}
                <div className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
