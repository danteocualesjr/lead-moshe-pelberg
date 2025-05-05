
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  author: string;
  position?: string;
  className?: string;
}

const TestimonialCard = ({ content, author, position, className }: TestimonialCardProps) => {
  return (
    <div className={cn("glass-card rounded-lg p-6", className)}>
      <div className="mb-4 text-accent">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M9.10498 17.7H4.39398C3.16098 17.7 2.52798 16.65 3.06898 15.52L4.94698 11.42C5.41998 10.48 6.36498 9.87 7.39098 9.87H9.71198C10.3 9.87 10.7299 9.31 10.5799 8.75L9.97998 6.43C9.83998 5.84 10.2199 5.25 10.8199 5.25H10.9209C11.3509 5.25 11.7509 5.45 12.0209 5.79L16.0099 10.99C16.2399 11.3 16.3699 11.68 16.3699 12.07V15.95C16.3699 16.95 15.5599 17.7 14.6199 17.7H12.0999" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-foreground mb-6">{content}</p>
      <div>
        <p className="font-semibold">{author}</p>
        {position && <p className="text-sm text-muted-foreground">{position}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
