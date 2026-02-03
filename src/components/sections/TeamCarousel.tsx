import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  portfolioUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Full-Stack Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
  },
  {
    id: 2,
    name: "Sarah Kim",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "AI & Automation Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
  },
  {
    id: 4,
    name: "Emily Zhang",
    role: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
  },
  {
    id: 5,
    name: "David Park",
    role: "Video Producer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
  },
  {
    id: 6,
    name: "Lisa Wang",
    role: "SEO Specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
  },
  {
    id: 7,
    name: "James Miller",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
  },
  {
    id: 8,
    name: "Anna Costa",
    role: "Brand Designer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    portfolioUrl: "#",
  },
];

const TeamCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedMembers = [...teamMembers, ...teamMembers];

  return (
    <div
      className="relative w-full overflow-hidden py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling Container */}
      <div
        className={`flex gap-6 ${isPaused ? "" : "animate-scroll-left"}`}
        style={{
          width: "fit-content",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedMembers.map((member, index) => (
          <a
            key={`${member.id}-${index}`}
            href={member.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0"
          >
            <div className="w-56 glass rounded-2xl p-4 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 hover:border-primary/30">
              {/* Image */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;
