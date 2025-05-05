
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Calculator, FileText, PieChart, Shield, Search, Users } from "lucide-react";

const Services = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="Our Services"
          subtitle="Comprehensive accounting and tax solutions tailored to meet your individual and business needs"
        />
        
        <section className="section-padding container">
          <SectionHeading 
            title="Comprehensive Financial Services" 
            subtitle="If you're looking for a firm that will focus on your individual needs, and always treat you like a client who matters, look no further."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="glass-card p-6 rounded-lg flex">
              <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                <FileText size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Accounting Software Selection & Implementation</h3>
                <p className="text-muted-foreground">
                  We help you choose the right accounting software for your business needs and provide expert setup and implementation services.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg flex">
              <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                <FileText size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Bookkeeping/Write-Up</h3>
                <p className="text-muted-foreground">
                  Comprehensive bookkeeping services to ensure your financial records are accurate, up-to-date, and compliant.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg flex">
              <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                <PieChart size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Business Consulting</h3>
                <p className="text-muted-foreground">
                  Strategic business advice to help you navigate challenges, seize opportunities, and achieve your business goals.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg flex">
              <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                <Users size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Business Entity Selection</h3>
                <p className="text-muted-foreground">
                  Expert guidance on choosing the right business structure to optimize tax benefits and limit your liability.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg flex">
              <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                <FileText size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Estate & Trust Tax Preparation</h3>
                <p className="text-muted-foreground">
                  Specialized tax services for estates and trusts to ensure proper tax filing and compliance.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg flex">
              <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                <PieChart size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Financial Analysis</h3>
                <p className="text-muted-foreground">
                  In-depth financial analysis to provide insights that support informed decision-making for your business.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg flex">
              <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                <FileText size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Financial Statements</h3>
                <p className="text-muted-foreground">
                  Preparation of accurate and timely financial statements that provide a clear picture of your financial position.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg flex">
              <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                <Shield size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">IRS Representation</h3>
                <p className="text-muted-foreground">
                  Professional representation during IRS audits and communications to protect your interests.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg flex">
              <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                <Calculator size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Retirement Planning</h3>
                <p className="text-muted-foreground">
                  Strategic planning services for individual and employee retirement plans to secure your financial future.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg flex">
              <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                <Calculator size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sales Tax Services</h3>
                <p className="text-muted-foreground">
                  Expert management and preparation of sales tax obligations to ensure compliance and minimize liability.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg flex">
              <div className="mr-4 bg-primary/10 h-fit p-3 rounded-full">
                <Calculator size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tax Preparation & Planning</h3>
                <p className="text-muted-foreground">
                  Comprehensive tax preparation and proactive planning strategies to minimize future tax liabilities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-slate-900 text-white py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Service Not Listed?</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Contact us to discuss your specific needs. We're committed to providing personalized solutions for all our clients.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
