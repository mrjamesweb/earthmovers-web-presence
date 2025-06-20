
import { Home, Building, Wrench, Paintbrush, Hammer, Truck, Zap, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-white" />,
      title: "Residential Construction",
      description: "Custom homes, additions, and renovations built to your exact specifications with modern design principles.",
      features: ["Custom Home Building", "Home Additions", "Kitchen & Bath Remodeling", "Basement Finishing"],
      gradient: "from-blue-500 to-blue-700",
      hoverGradient: "from-blue-600 to-blue-800"
    },
    {
      icon: <Building className="h-12 w-12 text-white" />,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial facilities designed for success and functionality.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Restaurant Construction"],
      gradient: "from-purple-500 to-purple-700",
      hoverGradient: "from-purple-600 to-purple-800"
    },
    {
      icon: <Wrench className="h-12 w-12 text-white" />,
      title: "General Contracting",
      description: "Complete project management from initial planning to final completion with expert coordination.",
      features: ["Project Management", "Permit Assistance", "Subcontractor Coordination", "Quality Control"],
      gradient: "from-green-500 to-green-700",
      hoverGradient: "from-green-600 to-green-800"
    },
    {
      icon: <Paintbrush className="h-12 w-12 text-white" />,
      title: "Interior Finishing",
      description: "Beautiful interior finishes that bring your vision to life with premium materials and craftsmanship.",
      features: ["Flooring Installation", "Painting & Drywall", "Custom Millwork", "Tile & Stone Work"],
      gradient: "from-orange-500 to-orange-700",
      hoverGradient: "from-orange-600 to-orange-800"
    },
    {
      icon: <Hammer className="h-12 w-12 text-white" />,
      title: "Roofing Services",
      description: "Professional roofing installation, repair, and maintenance with weather-resistant solutions.",
      features: ["Roof Installation", "Roof Repairs", "Gutter Systems", "Emergency Services"],
      gradient: "from-red-500 to-red-700",
      hoverGradient: "from-red-600 to-red-800"
    },
    {
      icon: <Truck className="h-12 w-12 text-white" />,
      title: "Excavation & Site Work",
      description: "Complete site preparation and excavation services with modern equipment and expertise.",
      features: ["Site Preparation", "Excavation", "Grading", "Utility Installation"],
      gradient: "from-amber-500 to-amber-700",
      hoverGradient: "from-amber-600 to-amber-800"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-60 h-60 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Settings className="h-5 w-5 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="font-semibold">Our Expert Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            <span className="block">Comprehensive</span>
            <span className="block text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">Construction</span>
            <span className="block">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer a full spectrum of construction services 
            to meet all your building needs with exceptional quality and innovation.
          </p>
        </div>

        {/* Services Grid with Staggered Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group relative"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              <div className="absolute inset-0 bg-white group-hover:bg-transparent transition-all duration-500"></div>
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-slate-800 group-hover:text-white transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0 relative z-10">
                <p className="text-slate-600 group-hover:text-slate-100 mb-6 leading-relaxed transition-all duration-300">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm transition-all duration-300">
                      <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${service.gradient} group-hover:bg-white transition-all duration-300`}></div>
                      <span className="text-slate-600 group-hover:text-slate-100 transition-all duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full border-2 group-hover:border-white group-hover:text-white group-hover:bg-transparent transition-all duration-300 hover:scale-105"
                >
                  <Zap className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Learn More
                </Button>
              </CardContent>
              
              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-4 text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
          >
            <Settings className="mr-2 h-5 w-5" />
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
