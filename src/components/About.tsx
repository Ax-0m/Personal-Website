
import { GraduationCap, Lightbulb, Code, Network } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-container bg-secondary/30">
      <h2 className="section-title text-gradient">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-slide-up opacity-0">
          <p className="text-lg">
            Hello! I'm a passionate college student with a deep interest in modern web development, artificial intelligence, machine learning, and decentralized systems.
          </p>
          
          <p className="text-lg">
            My journey in tech began with web development, where I fell in love with creating interactive and beautiful user experiences. As I've progressed, I've become increasingly fascinated by the potential of AI/ML to transform how we build software and the promise of Web3 technologies to create more open and user-centric digital systems.
          </p>
          
          <p className="text-lg">
            I'm constantly learning and building projects that combine these interests, searching for ways these technologies can complement each other to create innovative solutions for real-world problems.
          </p>
          
          <div className="flex gap-4 pt-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors"
            >
              See My Projects
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <GraduationCap size={32} className="text-portfolio-purple" />,
              title: "Education",
              description: "Computer Science student with focus on modern web technologies and artificial intelligence."
            },
            {
              icon: <Code size={32} className="text-portfolio-blue" />,
              title: "Web Development",
              description: "Experienced in building responsive, accessible, and performant web applications."
            },
            {
              icon: <Lightbulb size={32} className="text-portfolio-purple" />,
              title: "AI & ML",
              description: "Exploring machine learning algorithms and AI applications in web development."
            },
            {
              icon: <Network size={32} className="text-portfolio-blue" />,
              title: "Web3 & DApps",
              description: "Learning about blockchain technology and building decentralized applications."
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
    </section>
  );
}
