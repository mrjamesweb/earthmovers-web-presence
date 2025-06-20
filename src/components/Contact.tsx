
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
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
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
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
      icon: <Phone className="h-6 w-6 text-orange-500" />,
      title: "Phone",
      details: ["(555) 123-4567", "(555) 987-6543"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-500" />,
      title: "Email",
      details: ["info@buildtech.com", "quotes@buildtech.com"],
      description: "Send us your project details"
    },
    {
      icon: <MapPin className="h-6 w-6 text-orange-500" />,
      title: "Office",
      details: ["123 Construction Ave", "Building City, BC 12345"],
      description: "Visit our main office"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: "Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM"],
      description: "Emergency services available 24/7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a free consultation and quote. Let's discuss how we can 
            bring your construction vision to life with our expertise and dedication.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    {info.icon}
                    <CardTitle className="text-lg text-slate-800">
                      {info.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-slate-700 font-medium">
                      {detail}
                    </p>
                  ))}
                  <p className="text-slate-600 text-sm mt-2">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-medium mb-2">
                        Project Type
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Residential, Commercial, etc."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Tell us about your project requirements, timeline, and any specific details..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
