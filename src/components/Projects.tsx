
import { ExternalLink, Github, Code, LayoutGrid, Laptop, BrainCircuit, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "Modern Web Portfolio",
      description: "A responsive portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
      icon: <LayoutGrid className="w-12 h-12 text-primary" />,
      tags: ["React", "TypeScript", "Tailwind CSS", "Responsive"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "AI Image Generator",
      description: "Web application that uses machine learning to generate images based on text descriptions.",
      icon: <BrainCircuit className="w-12 h-12 text-primary" />,
      tags: ["React", "Python", "TensorFlow", "API Integration"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "Decentralized Marketplace",
      description: "A Web3 marketplace that allows users to buy and sell digital assets using cryptocurrency.",
      icon: <ShoppingBag className="w-12 h-12 text-primary" />,
      tags: ["React", "Solidity", "Ethereum", "Web3.js"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "Smart Task Manager",
      description: "Task management application that uses AI to prioritize and categorize tasks for better productivity.",
      icon: <Laptop className="w-12 h-12 text-primary" />,
      tags: ["React", "Node.js", "Machine Learning", "MongoDB"],
      demoLink: "#",
      repoLink: "#"
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
            <CardFooter className="flex justify-between">
              <a 
                href={project.demoLink} 
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} className="mr-1" /> Live Demo
              </a>
              <a 
                href={project.repoLink} 
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github size={16} className="mr-1" /> Source Code
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://github.com/Prakhar-Kumar-1314" 
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
