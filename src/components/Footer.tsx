
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div>
            <h3 className="text-xl font-bold mb-4">Moshe Pelberg, CPA</h3>
            <p className="text-slate-300 mb-2">Serving central Maryland since 2013</p>
            <p className="text-slate-300">Certified QuickBooks ProAdvisor</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <Phone size={16} className="mr-2" />
              <span className="text-slate-300">410-963-1247</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={16} className="mr-2" />
              <a href="mailto:mpelberg@moshepelbergcpa.com" className="text-slate-300 hover:text-primary transition-colors">
                mpelberg@moshepelbergcpa.com
              </a>
            </div>
            <p className="text-slate-300 mt-2">
              5906 Park Heights Avenue, Suite 107-8<br />
              Baltimore, MD 21215
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-slate-300 hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-300 hover:text-primary transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-slate-300 hover:text-primary transition-colors">Newsletter</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Client Portal</h3>
            <p className="text-slate-300 mb-4">Access your financial documents securely through our client portal.</p>
            <Link to="/portal" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
              Client Login
            </Link>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-400">
          <p>&copy; {currentYear} Moshe Pelberg, CPA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
