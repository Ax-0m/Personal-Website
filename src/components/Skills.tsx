
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      name: "Web Development",
      skills: [
        "HTML", "CSS", "JavaScript", "TypeScript", "React", 
        "Node.js", "Next.js", "Tailwind CSS", "Responsive Design"
      ]
    },
    {
      name: "AI/ML",
      skills: [
        "Python", "TensorFlow", "PyTorch", "Data Analysis", 
        "Neural Networks", "NLP", "Computer Vision"
      ]
    },
    {
      name: "Blockchain/Web3",
      skills: [
        "Solidity", "Ethereum", "Smart Contracts", "DApps", 
        "Web3.js", "Decentralized Systems", "IPFS"
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        "Git", "GitHub", "VS Code", "Docker", "AWS", 
        "CI/CD", "Agile", "Problem Solving"
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
            className="bg-secondary/30 rounded-lg p-6 animate-slide-up opacity-0"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="px-3 py-1 text-sm bg-background hover:bg-primary hover:text-white transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          I'm constantly learning and adding new skills to my repertoire. 
          Currently, I'm deepening my knowledge in AI/ML and exploring blockchain development.
        </p>
        <a 
          href="#projects" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
        >
          See My Projects
        </a>
      </div>
    </section>
  );
}
