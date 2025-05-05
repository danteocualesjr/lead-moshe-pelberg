
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { FileText, Calendar, Mail } from "lucide-react";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log("Subscription email:", email);
    
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    setEmail("");
  };
  
  // Sample newsletters
  const newsletters = [
    {
      id: 1,
      title: "2023 Tax Changes You Need to Know",
      date: "April 2023",
      description: "Key tax law changes that could affect your 2023 tax return and planning strategies.",
      link: "#",
    },
    {
      id: 2,
      title: "Retirement Planning Strategies",
      date: "February 2023",
      description: "Smart retirement planning strategies to maximize your savings and minimize taxes.",
      link: "#",
    },
    {
      id: 3,
      title: "Small Business Tax Deductions",
      date: "December 2022",
      description: "Overlooked tax deductions that can save your small business money this tax season.",
      link: "#",
    },
  ];
  
  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="Newsletter"
          subtitle="Stay informed with the latest financial news, tax updates, and accounting insights"
        />
        
        <section className="section-padding container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Latest Newsletters" 
                subtitle="Browse our latest editions to stay informed about important financial matters."
              />
              
              <div className="space-y-6">
                {newsletters.map((newsletter) => (
                  <div key={newsletter.id} className="glass-card p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{newsletter.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        {newsletter.date}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{newsletter.description}</p>
                    <Button variant="outline" asChild className="w-full sm:w-auto">
                      <a href={newsletter.link}>
                        <FileText size={16} className="mr-2" />
                        Read Newsletter
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <SectionHeading 
                title="Subscribe to Our Newsletter" 
                subtitle="Stay updated with important tax deadlines, accounting tips, and financial planning strategies."
              />
              
              <div className="glass-card p-6 rounded-lg">
                <p className="mb-6 text-muted-foreground">
                  Our newsletter provides valuable insights on:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>Tax law updates and their impact on individuals and businesses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>Financial planning strategies and tips</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>Important tax deadlines and reminders</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>Accounting best practices for businesses</span>
                  </li>
                </ul>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail size={18} className="text-muted-foreground" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/90 border border-border rounded-md pl-10 p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Subscribe Now
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
              
              <div className="glass-card p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Newsletter Archives</h3>
                <p className="text-muted-foreground mb-4">
                  Looking for a specific past edition? Browse our newsletter archives to find valuable information from previous issues.
                </p>
                <Button variant="outline" asChild>
                  <a href="#">
                    View Archives
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Newsletter;
