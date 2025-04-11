import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        "Next.js", "React", "TypeScript", "TailwindCSS",
        "Framer Motion", "Redux Toolkit", "React Query",
        "Shadcn UI", "Radix UI", "GraphQL"
      ]
    },
    {
      name: "Backend & Database",
      skills: [
        "Node.js", "Express", "Prisma", "PostgreSQL",
        "MongoDB", "Redis", "tRPC", "REST APIs",
        "GraphQL APIs", "WebSockets"
      ]
    },
    {
      name: "DevOps & Tools",
      skills: [
        "Docker", "AWS", "CI/CD", "Git",
        "GitHub Actions", "Vercel", "Linux",
        "Nginx", "Performance Optimization", "Testing (Jest/Cypress)"
      ]
    },
    {
      name: "Emerging Tech",
      skills: [
        "Web3.js", "Solidity", "Smart Contracts",
        "TensorFlow", "PyTorch", "LangChain",
        "OpenAI API", "Blockchain", "DApps", "IPFS"
      ]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-secondary/30 rounded-lg p-6 animate-slide-up opacity-0 hover:bg-secondary/40 transition-colors"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gradient">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="px-3 py-1.5 text-sm bg-background/50 hover:bg-primary hover:text-white transition-all duration-300 cursor-default transform hover:scale-105"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          Passionate about modern web development and emerging technologies. Currently exploring AI/ML integration in web apps and building scalable full-stack applications.
        </p>
        <a 
          href="#projects" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          See My Projects
        </a>
      </div>
    </section>
  );
}
