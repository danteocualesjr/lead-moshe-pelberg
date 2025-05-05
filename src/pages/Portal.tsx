
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Lock, Shield, FileText } from "lucide-react";

const Portal = () => {
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would authenticate with a server
    console.log("Login attempt:", loginData.email);
    
    toast({
      title: "Login information submitted",
      description: "In a real implementation, this would log you into the client portal.",
    });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="Client Portal"
          subtitle="Secure access to your financial documents and information"
        />
        
        <section className="section-padding container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Client Portal Benefits" 
                subtitle="Our secure portal provides convenient 24/7 access to your financial information."
              />
              
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-lg flex">
                  <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                    <FileText size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Document Sharing</h3>
                    <p className="text-muted-foreground">
                      Securely share tax returns, financial statements, and other important documents.
                    </p>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-lg flex">
                  <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                    <Shield size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
                    <p className="text-muted-foreground">
                      Bank-level encryption and security protocols keep your sensitive information safe.
                    </p>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-lg flex">
                  <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                    <Lock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">24/7 Access</h3>
                    <p className="text-muted-foreground">
                      Access your financial information anytime, anywhere, from any device.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  If you need assistance accessing your portal or have questions about your account, please contact us.
                </p>
                <a 
                  href="mailto:mpelberg@moshepelbergcpa.com" 
                  className="text-primary hover:underline flex items-center"
                >
                  <Mail size={18} className="mr-2" />
                  mpelberg@moshepelbergcpa.com
                </a>
              </div>
            </div>
            
            <div>
              <SectionHeading 
                title="Portal Login" 
                subtitle="Access your secure client portal to view and share documents."
              />
              
              <div className="glass-card p-6 md:p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={loginData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-border rounded-md bg-white/90 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="password" className="block text-sm font-medium">
                        Password
                      </label>
                      <a href="#" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={loginData.password}
                      onChange={handleChange}
                      className="w-full p-3 border border-border rounded-md bg-white/90 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm">
                      Remember me
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-center text-sm text-muted-foreground">
                    Don't have an account? <a href="/contact" className="text-primary hover:underline">Contact us</a> to get set up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portal;
