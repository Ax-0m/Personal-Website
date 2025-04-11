import { GraduationCap, Lightbulb, Code, Network } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-container bg-secondary/30">
      {/* Decorative blobs */}
      <div className="decorative-blob-left" />
      <div className="decorative-blob-right" />
      
      <div className="content-wrapper">
        <h2 className="section-title text-gradient">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up opacity-0">
            <p className="text-lg">
              Computer Science student at PES University with a passion for building modern web applications. Currently focused on full-stack development while actively contributing to real-world projects and expanding my technical expertise.
            </p>
            
            <p className="text-lg">
              Specializing in building scalable web applications with modern frameworks and cloud technologies. My journey in tech is driven by curiosity and a desire to solve complex problems through innovative solutions.
            </p>
            
            <p className="text-lg">
              Beyond web development, I'm fascinated by the potential of AI/ML and Web3 technologies. While these are areas I'm actively learning about, I'm excited to eventually integrate these cutting-edge technologies into my work.
            </p>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See My Projects
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Code size={32} className="text-portfolio-blue" />,
                title: "Development",
                description: "Building scalable web applications with modern tech stacks and best practices."
              },
              {
                icon: <GraduationCap size={32} className="text-portfolio-purple" />,
                title: "Education",
                description: "Pursuing Computer Science while applying knowledge to real-world projects."
              },
              {
                icon: <Lightbulb size={32} className="text-portfolio-blue" />,
                title: "Innovation",
                description: "Exploring new technologies and approaches to solve complex problems."
              },
              {
                icon: <Network size={32} className="text-portfolio-purple" />,
                title: "Future Focus",
                description: "Interested in exploring AI/ML and Web3 technologies for future applications."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg bg-background shadow-md card-hover animate-slide-up opacity-0" 
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
