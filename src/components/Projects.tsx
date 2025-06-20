
import { ExternalLink, Calendar, MapPin, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Modern Family Home",
      category: "Residential",
      description: "A stunning 3,500 sq ft custom home featuring open concept living, sustainable materials, and smart home technology integration.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
      year: "2023",
      location: "Beverly Hills",
      rating: 5,
      duration: "8 months",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Downtown Office Complex",
      category: "Commercial",
      description: "A 50,000 sq ft state-of-the-art office building with modern amenities, energy-efficient systems, and sustainable design.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      year: "2023",
      location: "Downtown LA",
      rating: 5,
      duration: "14 months",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Luxury Kitchen Remodel",
      category: "Renovation",
      description: "Complete kitchen transformation with custom Italian cabinetry, premium granite countertops, and professional-grade appliances.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      year: "2023",
      location: "Malibu",
      rating: 5,
      duration: "3 months",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Industrial Warehouse",
      category: "Industrial",
      description: "75,000 sq ft logistics facility with advanced automation systems, climate control, and efficient loading dock configuration.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      year: "2022",
      location: "Carson",
      rating: 5,
      duration: "12 months",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Historic Building Restoration",
      category: "Restoration",
      description: "Meticulous restoration of a 1920s landmark building, preserving architectural heritage while adding modern functionality.",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      year: "2022",
      location: "Pasadena",
      rating: 5,
      duration: "10 months",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Retail Shopping Center",
      category: "Commercial",
      description: "Multi-tenant retail destination with contemporary design, sustainable features, and optimized customer flow patterns.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      year: "2021",
      location: "Santa Monica",
      rating: 5,
      duration: "16 months",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
          <div className="grid grid-cols-6 gap-8">
            {Array.from({ length: 24 }).map((_, i) => (
              <div 
                key={i} 
                className="w-1 h-1 bg-white rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Star className="h-5 w-5 mr-2 text-orange-400 animate-bounce" />
            <span className="text-orange-300 font-semibold">Award-Winning Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Our Latest</span>
            <span className="block text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Masterpieces</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of exceptional construction projects that showcase 
            our commitment to quality, innovation, and architectural excellence.
          </p>
        </div>

        {/* Projects Grid with Advanced Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-0 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 overflow-hidden group relative"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animation: 'fade-in 0.8s ease-out forwards'
              }}
            >
              {/* Project Image with Overlay Effects */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                
                {/* Category and Year badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-xs font-bold">
                    {project.category}
                  </span>
                  <span className="bg-orange-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                    {project.year}
                  </span>
                </div>

                {/* Rating stars */}
                <div className="absolute top-4 right-4">
                  <div className="flex space-x-1">
                    {Array.from({ length: project.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Hover overlay content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Project Details */}
                <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1 text-orange-400" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1 text-orange-400" />
                    {project.duration}
                  </div>
                </div>

                {/* Progress bar indicating project complexity */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Project Complexity</span>
                    <span>Advanced</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1.5">
                    <div className={`bg-gradient-to-r ${project.gradient} h-1.5 rounded-full transition-all duration-1000 group-hover:w-full`} style={{ width: '85%' }}></div>
                  </div>
                </div>
              </CardContent>
              
              {/* Decorative corner element */}
              <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${project.gradient} opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16 space-y-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
            >
              View Full Portfolio
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
