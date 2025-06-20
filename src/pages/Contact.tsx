
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8 text-orange-500" />,
      title: "Phone",
      details: ["Main: (555) 123-4567", "Emergency: (555) 123-4568"],
      description: "Call us for immediate assistance or project inquiries"
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-500" />,
      title: "Email",
      details: ["info@buildtech.com", "quotes@buildtech.com"],
      description: "Email us for detailed project discussions"
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-500" />,
      title: "Office Location",
      details: ["1234 Construction Ave", "Building City, BC 90210"],
      description: "Visit our showroom and design center"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      title: "Business Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM"],
      description: "Emergency services available 24/7"
    }
  ];

  const officeLocations = [
    {
      name: "Main Office & Showroom",
      address: "1234 Construction Ave, Building City, BC 90210",
      phone: "(555) 123-4567",
      services: ["Design Consultation", "Material Showroom", "Project Planning", "Administrative Services"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Equipment & Storage Facility",
      address: "5678 Industrial Blvd, Building City, BC 90211",
      phone: "(555) 123-4569",
      services: ["Equipment Storage", "Material Warehouse", "Tool Maintenance", "Project Staging"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const serviceAreas = [
    "Beverly Hills", "Santa Monica", "Malibu", "Pasadena", "Burbank", "Glendale",
    "West Hollywood", "Manhattan Beach", "Redondo Beach", "Torrance", "Culver City",
    "Venice", "Marina del Rey", "El Segundo", "Hawthorne", "Inglewood"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Contact <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Us</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to start your construction project? Get in touch with our expert team 
              for a free consultation and personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-800">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-slate-600 font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">Get Your Free Quote</h2>
                <p className="text-lg text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                </p>
              </div>
              
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                        <Input placeholder="John" className="w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                        <Input placeholder="Doe" className="w-full" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <Input type="email" placeholder="john@example.com" className="w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                        <Input type="tel" placeholder="(555) 123-4567" className="w-full" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
                      <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                        <option>Select a service</option>
                        <option>Residential Construction</option>
                        <option>Commercial Construction</option>
                        <option>Renovation</option>
                        <option>Roofing</option>
                        <option>Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Project Location</label>
                      <Input placeholder="City, State" className="w-full" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Budget Range</label>
                      <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                        <option>Select budget range</option>
                        <option>Under $50,000</option>
                        <option>$50,000 - $100,000</option>
                        <option>$100,000 - $250,000</option>
                        <option>$250,000 - $500,000</option>
                        <option>$500,000 - $1,000,000</option>
                        <option>Over $1,000,000</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                      <Textarea 
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        className="w-full h-32"
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 text-lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Office Information */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">Visit Our Locations</h2>
                <p className="text-lg text-slate-600">
                  Stop by our facilities to see our work firsthand and meet our team.
                </p>
              </div>
              
              <div className="space-y-8">
                {officeLocations.map((location, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex">
                      <img 
                        src={location.image} 
                        alt={location.name}
                        className="w-32 h-32 object-cover rounded-l-lg"
                      />
                      <CardContent className="p-6 flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{location.name}</h3>
                        <p className="text-slate-600 mb-2">{location.address}</p>
                        <p className="text-orange-600 font-semibold mb-4">{location.phone}</p>
                        <div className="flex flex-wrap gap-2">
                          {location.services.map((service, i) => (
                            <span key={i} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                              {service}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Site Visit
                </Button>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Live Chat Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Service Areas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We proudly serve the Greater Los Angeles area with our construction expertise.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-200 rounded-lg p-4 text-center transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-slate-700 hover:text-orange-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-slate-600">
                Don't see your area listed? <span className="text-orange-600 font-semibold cursor-pointer hover:underline">Contact us</span> to discuss your project location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 mr-3" />
            <h2 className="text-3xl font-bold">24/7 Emergency Services</h2>
          </div>
          <p className="text-lg mb-6">
            Construction emergencies don't wait for business hours. Our emergency response team is available around the clock.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100 px-8 py-3 text-lg font-semibold">
            <Phone className="mr-2 h-5 w-5" />
            Call Emergency Line: (555) 123-4568
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
