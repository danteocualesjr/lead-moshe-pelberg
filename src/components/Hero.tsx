
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
  image?: string;
}

const Hero = ({ title, subtitle, cta, image }: HeroProps) => {
  return (
    <div className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-r from-slate-100 to-blue-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-100/30 to-transparent opacity-70"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 px-4 py-16 relative z-10">
        <div className="flex flex-col justify-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-gradient">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-8">
            {subtitle}
          </p>
          {cta && (
            <div>
              <Button asChild size="lg" className="mr-4">
                <Link to={cta.link}>{cta.text}</Link>
              </Button>
            </div>
          )}
        </div>
        
        {image && (
          <div className="hidden md:flex items-center justify-center animate-scale-in">
            <div className="glass-card p-2 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={image}
                alt="Hero illustration"
                className="rounded w-full max-w-md"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
