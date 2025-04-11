import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 bg-transparent z-50">
      <div
        className="h-full bg-gradient-to-r from-primary/30 to-primary/50 transition-all duration-300 backdrop-blur-sm"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
} 