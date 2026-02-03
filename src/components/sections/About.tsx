import { motion } from "framer-motion";
import { CheckCircle2, Zap, Users, Target } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We move fast without breaking things. Rapid iterations, quick turnarounds.",
  },
  {
    icon: Users,
    title: "Full Transparency",
    description: "No hidden fees, no fake experience claims. Real people, real portfolios.",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "We don't just build—we solve real business problems and drive measurable growth.",
  },
];

const features = [
  "Full in-house digital team",
  "Modern tech stacks & AI tools",
  "Startup-focused approach",
  "Cost-effective solutions",
  "Real individuals with portfolios",
  "Future-ready automation",
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Nexora</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
              Built by Engineers,{" "}
              <span className="text-gradient">Driven by Innovation</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We're a next-generation digital agency founded by software engineering students who believe 
              in learning by doing. While others talk about the future of tech, we're already building it.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              By combining traditional development expertise with AI-powered tools and automation, 
              we deliver premium digital solutions at startup-friendly prices. No corporate overhead, 
              no outdated processes—just a young, skilled team ready to grow with your business.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
