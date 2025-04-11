
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "Gamblers-Dilemma",
      description: "A comprehensive website to understand the house edge in gambling through various games.",
      image: "/anti-gambling.png",
      tags: ["React", "Express.js", "Tailwind CSS", "MongoDb"],
      demoLink: "https://anti-gambling-frontend.onrender.com/",
      repoLink: "https://github.com/Prakhar-Kumar-1314/Gamblers-Dilemma"
    },
    {
      title: "AI Image Generator",
      description: "Web application that uses machine learning to generate images based on text descriptions.",
      image: "/placeholder.svg",
      tags: ["React", "Python", "TensorFlow", "API Integration"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "Decentralized Marketplace",
      description: "A Web3 marketplace that allows users to buy and sell digital assets using cryptocurrency.",
      image: "/placeholder.svg",
      tags: ["React", "Solidity", "Ethereum", "Web3.js"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "Smart Task Manager",
      description: "Task management application that uses AI to prioritize and categorize tasks for better productivity.",
      image: "/placeholder.svg",
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
            <div className="relative h-48 bg-muted">
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full"
              />
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
          href="https://github.com" 
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
