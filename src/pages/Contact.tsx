
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="Contact Us"
          subtitle="We look forward to the opportunity to show you why so many of our clients refer their friends, family, and colleagues"
        />
        
        <section className="section-padding container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Get In Touch" 
                subtitle="We encourage you to give us a call or send a message. We're here to help with your accounting and tax needs."
              />
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                    <p className="text-muted-foreground">
                      5906 Park Heights Avenue<br />
                      Suite 107-8<br />
                      Baltimore, MD 21215
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Mailing Address</h3>
                    <p className="text-muted-foreground">
                      2833 Smith Avenue<br />
                      Box 145<br />
                      Baltimore, MD 21209
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone & Fax</h3>
                    <p className="text-muted-foreground">
                      Phone: 410-963-1247<br />
                      Fax: 410-844-0232
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a 
                      href="mailto:mpelberg@moshepelbergcpa.com" 
                      className="text-primary hover:underline"
                    >
                      mpelberg@moshepelbergcpa.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Thursday: 9:00 AM - 5:00 PM<br />
                      Friday: 9:00 AM - 3:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading 
                title="Send Us a Message" 
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />
              
              <ContactForm />
            </div>
          </div>
        </section>
        
        <section className="h-[400px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.3839001546865!2d-76.68539672412847!3d39.36177311929026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81a7dc8d6a1ef%3A0xc1ef87e9b7c7c34d!2s5906%20Park%20Heights%20Ave%2C%20Baltimore%2C%20MD%2021215!5e0!3m2!1sen!2sus!4v1715542689711!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
