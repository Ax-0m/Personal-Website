import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "Next.js", description: "React framework for production" },
        { name: "React", description: "JavaScript library for building UIs" },
        { name: "TypeScript", description: "Typed JavaScript for better development" },
        { name: "TailwindCSS", description: "Utility-first CSS framework" },
        { name: "Framer Motion", description: "Animation library for React" },
        { name: "Redux Toolkit", description: "State management solution" },
        { name: "React Query", description: "Data fetching and caching" },
        { name: "Shadcn UI", description: "Re-usable components" },
        { name: "Radix UI", description: "Unstyled, accessible components" },
        { name: "GraphQL", description: "Query language for APIs" }
      ]
    },
    {
      name: "Backend & Database",
      skills: [
        { name: "Node.js", description: "JavaScript runtime" },
        { name: "Express", description: "Web framework for Node.js" },
        { name: "Prisma", description: "Next-gen ORM" },
        { name: "PostgreSQL", description: "Relational database" },
        { name: "MongoDB", description: "NoSQL database" },
        { name: "Redis", description: "In-memory data store" },
        { name: "tRPC", description: "End-to-end typesafe APIs" },
        { name: "REST APIs", description: "API architectural style" },
        { name: "GraphQL APIs", description: "Query-based API" },
        { name: "WebSockets", description: "Real-time communication" }
      ]
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Docker", description: "Containerization platform" },
        { name: "AWS", description: "Cloud services" },
        { name: "CI/CD", description: "Continuous integration/deployment" },
        { name: "Git", description: "Version control" },
        { name: "GitHub Actions", description: "Automation platform" },
        { name: "Vercel", description: "Cloud platform for static sites" },
        { name: "Linux", description: "Operating system" },
        { name: "Nginx", description: "Web server" },
        { name: "Performance Optimization", description: "Speed and efficiency" },
        { name: "Testing (Jest/Cypress)", description: "Testing frameworks" }
      ]
    },
    {
      name: "Future Interests",
      skills: [
        { name: "AI/ML Integration", description: "Machine learning in web apps" },
        { name: "Web3 Development", description: "Blockchain applications" },
        { name: "Smart Contracts", description: "Self-executing contracts" },
        { name: "LLM Applications", description: "Large language models" },
        { name: "Blockchain", description: "Distributed ledger technology" },
        { name: "DApps", description: "Decentralized applications" },
        { name: "Data Science", description: "Data analysis and visualization" },
        { name: "Machine Learning", description: "AI model development" },
        { name: "Decentralized Systems", description: "Distributed computing" }
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
              <TooltipProvider>
                {category.skills.map((skill) => (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <Badge 
                        variant="secondary"
                        className="px-3 py-1.5 text-sm bg-background/50 hover:bg-primary hover:text-white transition-all duration-300 cursor-default transform hover:scale-105"
                      >
                        {skill.name}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          Passionate about building scalable web applications with modern technologies. While my current expertise lies in full-stack development, I'm continuously expanding my knowledge into emerging fields like AI/ML and Web3.
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
