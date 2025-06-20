
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Award, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="text-3xl font-bold group cursor-pointer">
              Build<span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text group-hover:from-orange-300 group-hover:to-orange-500 transition-all duration-300">Tech</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Building excellence since 1998. Your trusted partner for all construction needs 
              with unmatched quality, innovation, and professional service that exceeds expectations.
            </p>
            
            {/* Awards and Certifications */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-slate-400">
                <Award className="h-4 w-4 mr-2 text-orange-400" />
                <span>Licensed General Contractor</span>
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <Award className="h-4 w-4 mr-2 text-orange-400" />
                <span>BBB A+ Rating</span>
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <Award className="h-4 w-4 mr-2 text-orange-400" />
                <span>OSHA Safety Certified</span>
              </div>
            </div>

            {/* Social Media with Enhanced Design */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                { icon: Twitter, href: "#", color: "hover:text-sky-400" },
                { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-500" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-slate-700 hover:border-slate-600`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-orange-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="text-slate-300 flex items-center group cursor-pointer hover:text-slate-200 transition-colors duration-300">
                  <span className="w-1 h-1 bg-slate-500 rounded-full mr-3 group-hover:bg-orange-400 transition-colors duration-300"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-300 font-medium">123 Construction Ave</p>
                  <p className="text-slate-300">Building City, BC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-300 font-medium">(555) 123-4567</p>
                  <p className="text-slate-400 text-sm">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-300 font-medium">info@buildtech.com</p>
                  <p className="text-slate-400 text-sm">Quick response guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-slate-700 pt-12 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
              Stay Updated with Our Latest Projects
            </h3>
            <p className="text-slate-300 mb-6">Get construction tips, project updates, and exclusive offers delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors duration-300"
              />
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-3 transition-all duration-300 hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} BuildTech Construction. All rights reserved. | 
              <span className="text-orange-400 ml-1">Building Dreams Since 1998</span>
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                  <a key={index} href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300">
                    {link}
                  </a>
                ))}
              </div>
              <Button 
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
