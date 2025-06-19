import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "Next.js" },
        { name: "React" },
        { name: "TypeScript" },
        { name: "TailwindCSS" },
        { name: "Framer Motion" },
        { name: "Redux Toolkit" },
        { name: "React Query" },
        { name: "Shadcn UI" },
        { name: "Radix UI" },
        { name: "GraphQL" }
      ]
    },
    {
      name: "Backend & Database",
      skills: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "Prisma" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "tRPC" },
        { name: "REST APIs" },
        { name: "GraphQL APIs" },
        { name: "WebSockets" }
      ]
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Docker" },
        { name: "AWS" },
        { name: "Kubernetes" },
        { name: "Prometheus" },
        { name: "Grafana" },
        { name: "Helm" },
        { name: "Ingress" },
        { name: "ClusterShip" },
        { name: "Git" }
      ]
    },
    {
      name: "Web3 & Blockchain",
      skills: [
        { name: "Solidity" },
        { name: "Solana Web3.js" },
        { name: "Wagmi" },
        { name: "Viem" },
        { name: "Web3.js" },
        { name: "Smart Contracts" },
        { name: "DApps" }
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
                  key={skill.name}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm bg-background/50 hover:bg-primary hover:text-white transition-all duration-300 cursor-default transform hover:scale-105"
                >
                  {skill.name}
                </Badge>
              ))}
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
