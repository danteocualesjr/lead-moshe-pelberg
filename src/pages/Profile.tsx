
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";

const Profile = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title="About Moshe Pelberg"
          subtitle="Full-service Certified Public Accountant with over two decades of experience"
          image="/placeholder.svg"
        />
        
        <section className="section-padding container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              <SectionHeading 
                title="Professional Background" 
                subtitle="Moshe Pelberg is a full-service Certified Public Accountant licensed in the state of Maryland (license number 39346) since 2012."
              />
              
              <div className="prose max-w-none text-foreground">
                <p className="mb-4 text-lg">
                  Over two decades of experience have demonstrated to me that no template fits all people or circumstances. Each client deserves focused attention on their specific needs.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Education</h3>
                <ul className="space-y-2 list-disc pl-5 mb-6">
                  <li>BA and MA from Ner Israel College, Baltimore, MD</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Professional Experience</h3>
                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-lg">
                    <p className="font-medium">Sole Practitioner</p>
                    <p className="text-sm text-muted-foreground">2011 - Present</p>
                  </div>
                  
                  <div className="glass-card p-4 rounded-lg">
                    <p className="font-medium">Senior Accountant at Health Data Essentials</p>
                    <p className="text-sm text-muted-foreground">2010</p>
                  </div>
                  
                  <div className="glass-card p-4 rounded-lg">
                    <p className="font-medium">Staff Accountant at Salisbury Management</p>
                    <p className="text-sm text-muted-foreground">2007 - 2010</p>
                  </div>
                  
                  <div className="glass-card p-4 rounded-lg">
                    <p className="font-medium">Fiscal Officer at Ner Israel</p>
                    <p className="text-sm text-muted-foreground">1991 - 2007</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Professional Memberships</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Maryland Association of CPAs</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Certifications</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Certified QuickBooks ProAdvisor</li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex items-center justify-center">
              <div className="glass-card p-6 rounded-lg max-w-md">
                <blockquote className="text-xl italic text-foreground mb-6">
                  "Over two decades of experience have demonstrated to me that no template fits all people or circumstances."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    MP
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Moshe Pelberg, CPA</p>
                    <p className="text-sm text-muted-foreground">Maryland License #39346</p>
                  </div>
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

export default Profile;
