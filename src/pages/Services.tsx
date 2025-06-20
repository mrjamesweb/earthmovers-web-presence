import { Home, Building, Wrench, Paintbrush, Hammer, Truck, Zap, Settings, CheckCircle, Clock, Shield, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-white" />,
      title: "Residential Construction",
      description: "Complete custom home building services from foundation to finish, including modern design principles and energy-efficient construction methods.",
      features: ["Custom Home Building", "Home Additions", "Kitchen & Bath Remodeling", "Basement Finishing", "Garage Construction", "Deck & Patio Installation"],
      benefits: ["Personalized Design", "Quality Materials", "Energy Efficiency", "Warranty Protection"],
      gradient: "from-blue-500 to-blue-700",
      process: ["Initial Consultation", "Design & Planning", "Permit Acquisition", "Construction", "Final Walkthrough"],
      timeframe: "3-12 months"
    },
    {
      icon: <Building className="h-12 w-12 text-white" />,
      title: "Commercial Construction",
      description: "Professional commercial building services for offices, retail spaces, and industrial facilities with focus on functionality and code compliance.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Restaurant Construction", "Medical Facilities", "Educational Buildings"],
      benefits: ["ADA Compliance", "Modern Technology", "Flexible Layouts", "Future Expansion Ready"],
      gradient: "from-purple-500 to-purple-700",
      process: ["Site Analysis", "Architectural Planning", "Engineering Review", "Construction Management", "Occupancy Preparation"],
      timeframe: "6-24 months"
    },
    {
      icon: <Wrench className="h-12 w-12 text-white" />,
      title: "General Contracting",
      description: "Full-service project management from conception to completion with expert coordination of all trades and subcontractors.",
      features: ["Project Management", "Permit Assistance", "Subcontractor Coordination", "Quality Control", "Budget Management", "Timeline Scheduling"],
      benefits: ["Single Point of Contact", "Cost Control", "Quality Assurance", "On-Time Delivery"],
      gradient: "from-green-500 to-green-700",
      process: ["Project Planning", "Team Assembly", "Schedule Creation", "Progress Monitoring", "Quality Inspection"],
      timeframe: "Varies by project"
    },
    {
      icon: <Paintbrush className="h-12 w-12 text-white" />,
      title: "Interior Finishing",
      description: "Beautiful interior finishes that bring your vision to life with premium materials, expert craftsmanship, and attention to detail.",
      features: ["Flooring Installation", "Painting & Drywall", "Custom Millwork", "Tile & Stone Work", "Lighting Installation", "Trim & Molding"],
      benefits: ["Custom Design", "Premium Materials", "Expert Installation", "Design Consultation"],
      gradient: "from-orange-500 to-orange-700",
      process: ["Design Consultation", "Material Selection", "Preparation Work", "Installation", "Final Touches"],
      timeframe: "2-8 weeks"
    },
    {
      icon: <Hammer className="h-12 w-12 text-white" />,
      title: "Roofing Services",
      description: "Professional roofing installation, repair, and maintenance with weather-resistant solutions and comprehensive warranties.",
      features: ["Roof Installation", "Roof Repairs", "Gutter Systems", "Emergency Services", "Roof Inspections", "Maintenance Programs"],
      benefits: ["Weather Protection", "Energy Efficiency", "Extended Warranties", "Emergency Response"],
      gradient: "from-red-500 to-red-700",
      process: ["Roof Inspection", "Material Selection", "Preparation", "Installation", "Clean-up & Inspection"],
      timeframe: "1-3 weeks"
    },
    {
      icon: <Truck className="h-12 w-12 text-white" />,
      title: "Excavation & Site Work",
      description: "Complete site preparation and excavation services with modern equipment, expertise, and environmental consideration.",
      features: ["Site Preparation", "Excavation", "Grading", "Utility Installation", "Drainage Systems", "Landscaping Prep"],
      benefits: ["Proper Foundation", "Drainage Solutions", "Utility Ready", "Environmental Compliance"],
      gradient: "from-amber-500 to-amber-700",
      process: ["Site Survey", "Permit Acquisition", "Excavation", "Utility Installation", "Final Grading"],
      timeframe: "1-4 weeks"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We meet with you to understand your vision, needs, and budget requirements.",
      icon: <Users className="h-8 w-8 text-orange-500" />
    },
    {
      step: "2",
      title: "Design & Planning",
      description: "Our team creates detailed plans and designs that bring your vision to life.",
      icon: <Settings className="h-8 w-8 text-orange-500" />
    },
    {
      step: "3",
      title: "Permits & Approvals",
      description: "We handle all necessary permits and approvals to ensure compliance.",
      icon: <CheckCircle className="h-8 w-8 text-orange-500" />
    },
    {
      step: "4",
      title: "Construction",
      description: "Expert construction with regular updates and quality control checks.",
      icon: <Hammer className="h-8 w-8 text-orange-500" />
    },
    {
      step: "5",
      title: "Final Walkthrough",
      description: "Complete inspection and walkthrough to ensure your satisfaction.",
      icon: <Shield className="h-8 w-8 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Our <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Services</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive construction solutions tailored to meet your unique needs, 
              from concept to completion with exceptional quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl text-slate-800">{service.title}</CardTitle>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Services Include:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Benefits:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                          <span className="text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {service.timeframe}
                    </div>
                    <Button className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white`}>
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A streamlined approach that ensures quality, transparency, and your complete satisfaction.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-orange-400"></div>
                    )}
                  </div>
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-4 text-lg">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
