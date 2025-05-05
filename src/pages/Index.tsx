
import { Phone, Mail, FileText, Calculator, PieChart, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="Financial Clarity for Your Success"
          subtitle="Serving central Maryland since 2013 with Tax Compliance, Tax Planning, Accounting, and Bookkeeping for individuals and small businesses."
          cta={{ text: "Schedule a Consultation", link: "/contact" }}
          image="/placeholder.svg"
        />
        
        <section className="section-padding container">
          <SectionHeading 
            title="Expert Accounting Services" 
            subtitle="Whether you're an individual or a small business, we provide tailored accounting solutions to help you achieve your financial goals."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Tax Compliance" 
              description="Individual and business tax preparation services to ensure you're always in compliance with tax regulations."
              icon={<FileText size={24} />}
            />
            <ServiceCard 
              title="Tax Planning" 
              description="Strategic tax planning to minimize tax liability and maximize savings for you and your business."
              icon={<Calculator size={24} />}
            />
            <ServiceCard 
              title="Accounting" 
              description="Comprehensive accounting services including financial statements, analysis, and reporting."
              icon={<PieChart size={24} />}
            />
            <ServiceCard 
              title="Bookkeeping" 
              description="Detail-oriented bookkeeping to ensure your financial records are accurate and up-to-date."
              icon={<FileText size={24} />}
            />
            <ServiceCard 
              title="QuickBooks Services" 
              description="As a Certified QuickBooks ProAdvisor, we provide expert setup, training, and support."
              icon={<Shield size={24} />}
            />
            <ServiceCard 
              title="Business Consulting" 
              description="Strategic business advice to help you navigate challenges and capitalize on opportunities."
              icon={<PieChart size={24} />}
            />
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container px-4">
            <SectionHeading 
              title="Why Choose Moshe Pelberg, CPA?" 
              subtitle="With over two decades of experience, we understand that every client has unique financial needs and circumstances."
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="glass-card p-6 rounded-lg text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">20+</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Years Experience</h3>
                <p className="text-muted-foreground">Decades of accounting expertise at your service</p>
              </div>
              
              <div className="glass-card p-6 rounded-lg text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">100%</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized</h3>
                <p className="text-muted-foreground">Tailored solutions for your specific needs</p>
              </div>
              
              <div className="glass-card p-6 rounded-lg text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">CPA</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Licensed</h3>
                <p className="text-muted-foreground">Maryland licensed CPA since 2012</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-padding container">
          <SectionHeading 
            title="Client Testimonials" 
            subtitle="Don't just take our word for it. Here's what our clients have to say about our services."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              content="Moshe has been handling my taxes for years. His attention to detail and personalized approach has saved me thousands in tax liability."
              author="John Smith"
              position="Small Business Owner"
            />
            <TestimonialCard 
              content="The accounting services provided are top-notch. I finally feel like I have clarity on my business finances."
              author="Sarah Johnson"
              position="Entrepreneur"
            />
            <TestimonialCard 
              content="As someone who dreads tax season, having Moshe handle everything has been a huge relief. Highly recommend!"
              author="Michael Brown"
              position="Individual Client"
            />
          </div>
        </section>
        
        <section className="bg-slate-900 text-white py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Contact us today to schedule a consultation and learn how we can help you achieve your financial goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="glass-card bg-white/10 p-4 rounded-lg flex items-center">
                  <Phone size={20} className="text-accent mr-3" />
                  <span>410-963-1247</span>
                </div>
                <div className="glass-card bg-white/10 p-4 rounded-lg flex items-center">
                  <Mail size={20} className="text-accent mr-3" />
                  <a href="mailto:mpelberg@moshepelbergcpa.com" className="hover:text-accent transition-colors">
                    mpelberg@moshepelbergcpa.com
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" variant="default">
                  <Link to="/contact">Get in Touch</Link>
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

export default Index;
