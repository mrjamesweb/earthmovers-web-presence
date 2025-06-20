
import { Home, Building, Wrench, Paintbrush, Hammer, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-orange-500" />,
      title: "Residential Construction",
      description: "Custom homes, additions, and renovations built to your exact specifications.",
      features: ["Custom Home Building", "Home Additions", "Kitchen & Bath Remodeling", "Basement Finishing"]
    },
    {
      icon: <Building className="h-12 w-12 text-orange-500" />,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial facilities designed for success.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Restaurant Construction"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-orange-500" />,
      title: "General Contracting",
      description: "Complete project management from planning to completion.",
      features: ["Project Management", "Permit Assistance", "Subcontractor Coordination", "Quality Control"]
    },
    {
      icon: <Paintbrush className="h-12 w-12 text-orange-500" />,
      title: "Interior Finishing",
      description: "Beautiful interior finishes that bring your vision to life.",
      features: ["Flooring Installation", "Painting & Drywall", "Custom Millwork", "Tile & Stone Work"]
    },
    {
      icon: <Hammer className="h-12 w-12 text-orange-500" />,
      title: "Roofing Services",
      description: "Professional roofing installation, repair, and maintenance.",
      features: ["Roof Installation", "Roof Repairs", "Gutter Systems", "Emergency Services"]
    },
    {
      icon: <Truck className="h-12 w-12 text-orange-500" />,
      title: "Excavation & Site Work",
      description: "Complete site preparation and excavation services.",
      features: ["Site Preparation", "Excavation", "Grading", "Utility Installation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From concept to completion, we offer a full range of construction services 
            to meet all your building needs with exceptional quality and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-slate-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
