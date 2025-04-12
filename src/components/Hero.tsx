import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const leftBlobRef = useRef<HTMLDivElement>(null);
  const rightBlobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (leftBlobRef.current && rightBlobRef.current) {
        const scrollY = window.scrollY;
        const speed = 0.5;
        
        leftBlobRef.current.style.transform = `translateY(${-scrollY * speed}px)`;
        rightBlobRef.current.style.transform = `translateY(${scrollY * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Preload the section component
      import(`@/components/${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`);
      
      // Smooth scroll to the section
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(155, 135, 245, 0.4), transparent), radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.4), transparent)",
        }}
      />
      
      {/* Decorative blobs with parallax */}
      <div 
        ref={leftBlobRef} 
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 transition-transform duration-300" 
      />
      <div 
        ref={rightBlobRef} 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 transition-transform duration-300" 
      />
      
      <div className="content-wrapper max-w-[90rem] mx-auto text-center relative z-10">
        <h1 className="animate-fade-in opacity-0 [animation-delay:300ms] text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I'm{" "}
          <a 
            href="https://github.com/prakhar-kumar-1314" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary relative inline-block transition-all duration-300 hover:scale-105"
          >
            <span className="absolute -inset-1 bg-primary/20 blur-lg -z-10 rounded-lg transition-opacity duration-300 hover:opacity-100"></span>
            <span className="relative">Prakhar</span>
          </a>
        </h1>
        
        <div className="animate-fade-in opacity-0 [animation-delay:600ms] h-12 sm:h-20 mb-6 overflow-hidden">
          <div className="h-full flex flex-col justify-start transition-all duration-500 hover:scale-105">
            <h2 className="text-xl sm:text-3xl font-medium h-full flex items-center justify-center text-foreground/90 transition-opacity duration-300 hover:opacity-100">
              Full Stack Developer
            </h2>
            <h2 className="text-xl sm:text-3xl font-medium h-full flex items-center justify-center text-foreground/90 transition-opacity duration-300 hover:opacity-100">
              Tech Enthusiast
            </h2>
          </div>
        </div>
        
        <p className="animate-fade-in opacity-0 [animation-delay:900ms] text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Building modern web applications while exploring the exciting frontiers of technology. Currently focused on full-stack development with an eye towards AI and Web3 innovations.
        </p>
        
        <div className="animate-fade-in opacity-0 [animation-delay:1200ms] flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            View My Work
          </a>
          <a 
            href="#about" 
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
