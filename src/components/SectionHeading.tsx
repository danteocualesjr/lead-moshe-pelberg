
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false,
  className
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-10", 
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg md:max-w-2xl md:mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
