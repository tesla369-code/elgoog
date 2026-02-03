import { motion } from "framer-motion";
import { ExternalLink, Code, Palette, TrendingUp, Video, Bot, Linkedin, Github, Mail } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { BookCallDialog } from "@/components/ui/book-call-dialog";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  focus: string;
  bio: string;
  skills: string[];
  image: string;
  portfolioUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  email: string;
  icon: React.ElementType;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Full-Stack Developer",
    focus: "Web Development & APIs",
    bio: "Passionate about building scalable web applications. 3+ years of experience in React and Node.js ecosystems.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "https://alexchen.dev",
    linkedinUrl: "https://linkedin.com/in/alexchen",
    githubUrl: "https://github.com/alexchen",
    email: "alex@nexora.dev",
    icon: Code,
  },
  {
    id: 2,
    name: "Sarah Kim",
    role: "UI/UX Designer",
    focus: "Design & Branding",
    bio: "Creating beautiful, user-centered designs that drive engagement. Specialized in design systems and prototyping.",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping", "Branding", "Motion Design"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "https://sarahkim.design",
    linkedinUrl: "https://linkedin.com/in/sarahkim",
    githubUrl: "https://github.com/sarahkim",
    email: "sarah@nexora.dev",
    icon: Palette,
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "AI & Automation Lead",
    focus: "AI Solutions & Workflows",
    bio: "Building intelligent automation solutions that save businesses thousands of hours. Expert in AI integration.",
    skills: ["Python", "OpenAI", "Zapier", "No-code Tools", "LangChain", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "https://marcusjohnson.ai",
    linkedinUrl: "https://linkedin.com/in/marcusjohnson",
    githubUrl: "https://github.com/marcusjohnson",
    email: "marcus@nexora.dev",
    icon: Bot,
  },
  {
    id: 4,
    name: "Emily Zhang",
    role: "Mobile Developer",
    focus: "iOS & Android Apps",
    bio: "Crafting seamless mobile experiences for iOS and Android. Passionate about performance optimization.",
    skills: ["React Native", "Swift", "Kotlin", "Firebase", "Flutter", "App Store Optimization"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "https://emilyzhang.dev",
    linkedinUrl: "https://linkedin.com/in/emilyzhang",
    githubUrl: "https://github.com/emilyzhang",
    email: "emily@nexora.dev",
    icon: Code,
  },
  {
    id: 5,
    name: "David Park",
    role: "Video Producer",
    focus: "Video & Motion Design",
    bio: "Telling compelling stories through video and motion graphics. Experience with brands across industries.",
    skills: ["Premiere Pro", "After Effects", "DaVinci", "Motion Graphics", "Color Grading", "3D Animation"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "https://davidpark.video",
    linkedinUrl: "https://linkedin.com/in/davidpark",
    githubUrl: "https://github.com/davidpark",
    email: "david@nexora.dev",
    icon: Video,
  },
  {
    id: 6,
    name: "Lisa Wang",
    role: "SEO Specialist",
    focus: "Growth & Marketing",
    bio: "Driving organic growth through data-driven SEO strategies. Helped businesses achieve 10x traffic growth.",
    skills: ["Technical SEO", "Content Strategy", "Analytics", "Paid Ads", "Conversion Optimization", "A/B Testing"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "https://lisawang.marketing",
    linkedinUrl: "https://linkedin.com/in/lisawang",
    githubUrl: "https://github.com/lisawang",
    email: "lisa@nexora.dev",
    icon: TrendingUp,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Team</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              Meet the <span className="text-gradient">Experts</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Real individuals with real skills. No fake experience claims—just a talented team 
              of software engineering students ready to deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <member.icon className="w-6 h-6 text-primary-foreground" />
                    </div>

                    {/* Social Links Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={member.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-background/90 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Portfolio
                      </a>
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-display font-bold text-xl group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="text-muted-foreground text-sm mt-1">{member.focus}</p>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.slice(0, 4).map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 rounded-full text-xs bg-secondary text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 4 && (
                        <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary">
                          +{member.skills.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Contact Button */}
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                    >
                      <Mail className="w-4 h-4" />
                      Contact {member.name.split(' ')[0]}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Ready to Work With Our Team?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Schedule a free strategy call to discuss your project and see how our team can 
              bring your vision to life.
            </p>
            <BookCallDialog>
              <Button variant="hero" size="lg">
                Book a Strategy Call
              </Button>
            </BookCallDialog>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
