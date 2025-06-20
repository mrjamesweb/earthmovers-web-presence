
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Modern Family Home",
      category: "Residential",
      description: "A stunning 3,500 sq ft custom home featuring open concept living and sustainable materials.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      year: "2023"
    },
    {
      title: "Downtown Office Complex",
      category: "Commercial",
      description: "A 50,000 sq ft office building with modern amenities and energy-efficient systems.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      year: "2023"
    },
    {
      title: "Luxury Kitchen Remodel",
      category: "Renovation",
      description: "Complete kitchen transformation with custom cabinetry and premium finishes.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      year: "2022"
    },
    {
      title: "Industrial Warehouse",
      category: "Industrial",
      description: "75,000 sq ft warehouse facility with advanced logistics and storage solutions.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      year: "2022"
    },
    {
      title: "Historic Building Restoration",
      category: "Restoration",
      description: "Careful restoration of a 1920s building preserving its historic character.",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      year: "2022"
    },
    {
      title: "Retail Shopping Center",
      category: "Commercial",
      description: "Multi-tenant retail space with modern design and customer-friendly layout.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      year: "2021"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">Our Portfolio</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Recent Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of successful construction projects that showcase 
            our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                    {project.year}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0 h-auto">
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
