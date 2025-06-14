import { ExternalLink, Github, PenTool, Wallet, Dice1, BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "Gamblers-Dilemma",
      description: "A comprehensive website to understand the house edge in gambling through various games.",
      icon: <Dice1 className="w-12 h-12 text-primary" />,
      tags: ["React", "TypeScript", "Tailwind CSS", "Statistics", "MongoDB"],
      repoLink: "https://github.com/Ax-0m/Gamblers-Dilemma"
    },
    {
      title: "FinFlow",
      description: "Payment Platform PSL is a secure and scalable full-stack web application that replicates the core features of a digital wallet system.",
      icon: <Wallet className="w-12 h-12 text-primary" />,
      tags: ["React", "Node.js", "Express", "MongoDB"],
      repoLink: "https://github.com/Ax-0m/FinFlow"
    },
    {
      title: "Ink",
      description: "A real-time collaborative whiteboard tool for sketching ideas, diagrams, and visuals with simplicity and style.",
      icon: <PenTool className="w-12 h-12 text-primary" />,
      tags: ["Next.js", "WebSocket", "PostgreSQL", "Prisma"],
      repoLink: "https://github.com/Ax-0m/Draw-app"
    },
    {
      title: "Second Brain",
      description: "A centralized web application helping users store, organize, and access their favorite links and resources in one convenient location.",
      icon: <BrainCircuit className="w-12 h-12 text-primary" />,
      tags: ["React", "TypeScript" , "Local Storage", "Tagging System", "Search Functionality"],
      repoLink: "https://github.com/Ax-0m/Second-Brain"
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
