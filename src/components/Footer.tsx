
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Residential Construction',
    'Commercial Buildings',
    'General Contracting',
    'Interior Finishing',
    'Roofing Services',
    'Excavation & Site Work'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Build<span className="text-orange-500">Tech</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Building excellence since 1998. Your trusted partner for all construction needs 
              with unmatched quality and professional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-slate-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <div>
                  <p className="text-slate-300">123 Construction Ave</p>
                  <p className="text-slate-300">Building City, BC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <p className="text-slate-300">(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <p className="text-slate-300">info@buildtech.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300 text-sm">
              © {currentYear} BuildTech Construction. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-300 hover:text-orange-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-300 hover:text-orange-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-300 hover:text-orange-500 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
