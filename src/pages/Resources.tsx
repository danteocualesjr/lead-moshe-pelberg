
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Calculator, FileText, Search, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="Tax Resources"
          subtitle="Tools and information to help you get the answers to your tax-related questions as quickly as possible"
        />
        
        <section className="section-padding container">
          <SectionHeading 
            title="Tax Center Resources" 
            subtitle="Access valuable tools and resources to help you navigate tax-related questions and requirements."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="glass-card p-6 rounded-lg">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <FileText size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Record Retention Guide</h3>
              <p className="text-muted-foreground mb-4">
                Guidelines on how long you should keep various financial and tax-related records.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Guide <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <Calculator size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Calculators</h3>
              <p className="text-muted-foreground mb-4">
                Useful calculators to help you plan for retirement, estimate mortgage payments, and more.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Use Calculators <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <FileText size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">IRS Publications & Forms</h3>
              <p className="text-muted-foreground mb-4">
                Access official IRS documents, publications, and tax forms needed for compliance.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://www.irs.gov/forms-instructions" target="_blank" rel="noopener noreferrer">
                  IRS Website <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <FileText size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tax Appointment Checklist</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive list to help you prepare for your tax appointment and ensure nothing is missed.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Download Checklist <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <Calculator size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tax Rates & Due Dates</h3>
              <p className="text-muted-foreground mb-4">
                Stay informed about current tax rates and important deadlines to avoid penalties.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Info <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <FileText size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Taxpayer Rights & Glossary</h3>
              <p className="text-muted-foreground mb-4">
                Educational materials on taxpayer rights and terminology to help you understand tax concepts.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Learn More <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <Calculator size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">IRS Withholding Calculator</h3>
              <p className="text-muted-foreground mb-4">
                Tool to help you estimate the correct amount of tax to have withheld from your paycheck.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer">
                  Use Calculator <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <Search size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Where is My Refund?</h3>
              <p className="text-muted-foreground mb-4">
                Track the status of your tax refund through the official IRS tool.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://www.irs.gov/refunds" target="_blank" rel="noopener noreferrer">
                  Check Status <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <FileText size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Important Videos</h3>
              <p className="text-muted-foreground mb-4">
                Educational content, including Tony Robbins discussing the importance of accounting records.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Watch Videos <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="bg-slate-900 text-white py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Personalized Assistance?</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Have questions about these resources or need help with your specific situation? Our team is here to help.
              </p>
              <Button asChild size="lg" variant="default">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
