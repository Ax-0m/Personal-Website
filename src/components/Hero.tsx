
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(155, 135, 245, 0.4), transparent), radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.4), transparent)",
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="animate-fade-in opacity-0 [animation-delay:300ms] text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="text-gradient">Prakhar</span>
        </h1>
        
        <div className="animate-fade-in opacity-0 [animation-delay:600ms] h-12 sm:h-20 mb-6 overflow-hidden">
          <div className="h-full flex flex-col justify-start transition-transform duration-500 hover:-translate-y-1/2">
            <h2 className="text-xl sm:text-3xl font-medium h-full flex items-center justify-center">
              Web Developer
            </h2>
            <h2 className="text-xl sm:text-3xl font-medium h-full flex items-center justify-center">
              AI/ML & Web3 Enthusiast
            </h2>
          </div>
        </div>
        
        <p className="animate-fade-in opacity-0 [animation-delay:900ms] text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A college student passionate about building modern web applications and exploring the frontiers of decentralized systems and artificial intelligence.
        </p>
        
        <div className="animate-fade-in opacity-0 [animation-delay:1200ms] flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </a>
          <a 
            href="#about" 
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
