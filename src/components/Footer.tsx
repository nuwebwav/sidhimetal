import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ASTSIDDHI METAL" className="h-12 w-12 object-contain bg-card rounded" />
              <div>
                <span className="font-heading font-bold text-lg">ASTSIDDHI</span>
                <span className="font-heading font-bold text-lg text-accent ml-1">METAL</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for premium quality ferrous and non-ferrous metal products. 
              Serving industries worldwide with excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Stainless Steel Tubes & Pipes</li>
              <li>Carbon Steel Products</li>
              <li>Sheets & Plates</li>
              <li>Pipe Fittings</li>
              <li>Rods & Rings</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Shop No 106 A, 2nd Kumbharwada, Mumbai 400004
                </span>
              </li>
              <li>
                <a href="tel:+919820521850" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                  +91 9820521850
                </a>
              </li>
              <li>
                <a href="mailto:astsiddhimetal@gmail.com" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                  astsiddhimetal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} ASTSIDDHI METAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
