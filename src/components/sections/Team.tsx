import { motion } from "framer-motion";
import { ExternalLink, Code, Palette, TrendingUp, Video, Bot } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  focus: string;
  skills: string[];
  image: string;
  portfolioUrl: string;
  icon: React.ElementType;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Full-Stack Developer",
    focus: "Web Development & APIs",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
    icon: Code,
  },
  {
    id: 2,
    name: "Sarah Kim",
    role: "UI/UX Designer",
    focus: "Design & Branding",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
    icon: Palette,
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "AI & Automation Lead",
    focus: "AI Solutions & Workflows",
    skills: ["Python", "OpenAI", "Zapier", "No-code Tools"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
    icon: Bot,
  },
  {
    id: 4,
    name: "Emily Zhang",
    role: "Mobile Developer",
    focus: "iOS & Android Apps",
    skills: ["React Native", "Swift", "Kotlin", "Firebase"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
    icon: Code,
  },
  {
    id: 5,
    name: "David Park",
    role: "Video Producer",
    focus: "Video & Motion Design",
    skills: ["Premiere Pro", "After Effects", "DaVinci", "Motion Graphics"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
    icon: Video,
  },
  {
    id: 6,
    name: "Lisa Wang",
    role: "SEO Specialist",
    focus: "Growth & Marketing",
    skills: ["Technical SEO", "Content Strategy", "Analytics", "Paid Ads"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
    icon: TrendingUp,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 relative overflow-hidden">
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
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Team</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            Meet the <span className="text-gradient">Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real individuals with real skills. No fake experience claims—just a talented team 
            ready to deliver exceptional results.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.a
              key={member.id}
              href={member.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group block"
            >
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2">
                <div className="flex items-start gap-4 mb-4">
                  {/* Photo */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-foreground" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors truncate">
                        {member.name}
                      </h3>
                    </div>
                    <p className="text-primary text-sm font-medium">{member.role}</p>
                    <p className="text-muted-foreground text-xs mt-1">{member.focus}</p>
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <member.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 rounded-full text-xs bg-secondary text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
