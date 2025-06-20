
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "Our team will contact you within 2 hours during business hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-7 w-7 text-white" />,
      title: "Call Us",
      details: ["(555) 123-4567", "(555) 987-6543"],
      description: "24/7 emergency support available",
      gradient: "from-blue-500 to-blue-700",
      delay: "0s"
    },
    {
      icon: <Mail className="h-7 w-7 text-white" />,
      title: "Email Us",
      details: ["info@buildtech.com", "quotes@buildtech.com"],
      description: "Quick response within 2 hours",
      gradient: "from-purple-500 to-purple-700",
      delay: "0.1s"
    },
    {
      icon: <MapPin className="h-7 w-7 text-white" />,
      title: "Visit Us",
      details: ["123 Construction Ave", "Building City, BC 12345"],
      description: "Modern showroom & office space",
      gradient: "from-green-500 to-green-700",
      delay: "0.2s"
    },
    {
      icon: <Clock className="h-7 w-7 text-white" />,
      title: "Business Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM"],
      description: "Emergency services available 24/7",
      gradient: "from-orange-500 to-orange-700",
      delay: "0.3s"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Star className="h-5 w-5 mr-2 animate-bounce" />
            <span className="font-semibold">Let's Build Together</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            <span className="block">Ready to Start</span>
            <span className="block text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">Your Dream</span>
            <span className="block">Project?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and detailed quote. Let's transform 
            your construction vision into reality with our expert team and proven process.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                style={{ 
                  animationDelay: info.delay,
                  animation: 'fade-in 0.6s ease-out forwards'
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${info.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {info.icon}
                    </div>
                    <CardTitle className="text-lg text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                      {info.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-slate-700 font-semibold mb-1">
                      {detail}
                    </p>
                  ))}
                  <p className="text-slate-600 text-sm mt-3 group-hover:text-slate-700 transition-colors duration-300">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <CardHeader className="bg-gradient-to-r from-slate-50 to-white">
                <CardTitle className="text-3xl text-slate-800 flex items-center">
                  <Send className="mr-3 h-8 w-8 text-orange-500" />
                  Send Us Your Project Details
                </CardTitle>
                <p className="text-slate-600 mt-2">Fill out the form below and we'll get back to you within 2 hours</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-slate-700 font-semibold mb-3 group-focus-within:text-orange-600 transition-colors">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full border-2 border-slate-200 focus:border-orange-500 transition-all duration-300 hover:border-slate-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-slate-700 font-semibold mb-3 group-focus-within:text-orange-600 transition-colors">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full border-2 border-slate-200 focus:border-orange-500 transition-all duration-300 hover:border-slate-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-slate-700 font-semibold mb-3 group-focus-within:text-orange-600 transition-colors">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border-2 border-slate-200 focus:border-orange-500 transition-all duration-300 hover:border-slate-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-slate-700 font-semibold mb-3 group-focus-within:text-orange-600 transition-colors">
                        Project Type
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full border-2 border-slate-200 focus:border-orange-500 transition-all duration-300 hover:border-slate-300"
                        placeholder="Residential, Commercial, etc."
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-slate-700 font-semibold mb-3 group-focus-within:text-orange-600 transition-colors">
                      Project Description *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full border-2 border-slate-200 focus:border-orange-500 transition-all duration-300 hover:border-slate-300"
                      placeholder="Tell us about your project requirements, timeline, budget range, and any specific details that will help us provide the best solution for your needs..."
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                    <Button 
                      type="button"
                      size="lg" 
                      variant="outline"
                      className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white py-4 text-lg transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </Button>
                  </div>
                </form>

                {/* Trust indicators */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span>Quick Response</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
