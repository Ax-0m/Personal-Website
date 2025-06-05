import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/Ax-0m" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/prakhar-kumar-059aa4265/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://x.com/_PrakharKumar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:prakharkumar1314@gmail.com" 
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
            </a>
          </div>
          
          {/* Copyright and Credits */}
          <div className="flex flex-col items-center gap-3">
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Prakhar Kumar
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <span>Crafted with</span>
              <Heart size={14} className="text-red-400 animate-pulse" />
              <span>and</span>
              <Code2 size={14} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
