
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-gradient mb-4">Your Name</div>
          
          <div className="flex space-x-4 mb-6">
            <a href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:youremail@example.com" className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary">Home</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary">About</a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-primary">Skills</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary">Projects</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
