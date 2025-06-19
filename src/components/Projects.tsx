import { ExternalLink, Github, PenTool, Wallet, Dice1, BrainCircuit, MessageSquare, Key } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "Pulse",
      description: "AI Chat Platform with Multiple Providers - A microservices platform integrating GPT-4, Claude Sonnet 4, and Llama 3.3 with real-time provider switching and file analysis capabilities.",
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      tags: ["Python", "FastAPI", "Express.js", "PostgreSQL", "Prisma", "React"],
      repoLink: "https://github.com/Ax-0m/Pulse"
    },
    {
      title: "Solana Wallet Backend",
      description: "Secure Web3 Key Management system with JWT authentication, encrypted backend storage for private keys, and RESTful APIs for SOL transfers and transaction signing.",
      icon: <Key className="w-12 h-12 text-primary" />,
      tags: ["Node.js", "Express.js", "MongoDB", "Solana Web3.js", "React"],
      repoLink: "https://github.com/Ax-0m/Solana-Wallet"
    },
    {
      title: "FinFlow",
      description: "Secure Money Transfer Platform with user authentication and balance management, featuring RESTful APIs integrated with a responsive React frontend.",
      icon: <Wallet className="w-12 h-12 text-primary" />,
      tags: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js"],
      repoLink: "https://github.com/Ax-0m/FinFlow"
    },
    {
      title: "Second Brain",
      description: "Centralized Link Management application developed with TypeScript, featuring secure authentication and efficient link categorization using the MERN stack.",
      icon: <BrainCircuit className="w-12 h-12 text-primary" />,
      tags: ["TypeScript", "MERN Stack"],
      repoLink: "https://github.com/Ax-0m/Second-Brain"
    },
    {
      title: "Ink",
      description: "Real-time Collaborative Whiteboard with WebSocket-based synchronization for multi-user collaboration, featuring real-time drawing, shapes, and text capabilities.",
      icon: <PenTool className="w-12 h-12 text-primary" />,
      tags: ["Next.js", "WebSocket", "Prisma", "PostgreSQL"],
      repoLink: "https://github.com/Ax-0m/Draw-app"
    }
  ];

  return (
    <section id="projects" className="section-container bg-secondary/30">
      <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="overflow-hidden card-hover animate-slide-up opacity-0 border border-border/50"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center justify-center p-6 bg-secondary/20">
              <div className="p-4 rounded-full bg-secondary/30 flex items-center justify-center">
                {project.icon}
              </div>
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-primary/5">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center pt-4">
              <a 
                href={project.repoLink} 
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github size={16} className="mr-2" /> View Source Code
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://github.com/Ax-0m" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
        >
          <Github size={20} className="mr-2" />
          View More on GitHub
        </a>
      </div>
    </section>
  );
}
