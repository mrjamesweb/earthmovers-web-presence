
import { ExternalLink, Calendar, MapPin, Star, DollarSign, Users, Clock, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  const featuredProjects = [
    {
      title: "Luxury Oceanview Estate",
      category: "Residential",
      description: "A stunning 5,000 sq ft custom estate featuring panoramic ocean views, smart home integration, infinity pool, and sustainable materials throughout.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      location: "Malibu, CA",
      budget: "$2.8M",
      duration: "14 months",
      rating: 5,
      features: ["Ocean Views", "Smart Home", "Infinity Pool", "Solar Panels", "Custom Kitchen"],
      client: "Private Residence"
    },
    {
      title: "Tech Innovation Center",
      category: "Commercial",
      description: "Modern 75,000 sq ft technology campus with collaborative workspaces, advanced HVAC systems, and LEED Gold certification.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      location: "Silicon Valley, CA",
      budget: "$15M",
      duration: "18 months",
      rating: 5,
      features: ["LEED Gold", "Open Concept", "Advanced HVAC", "Parking Garage", "Cafeteria"],
      client: "TechCorp Solutions"
    },
    {
      title: "Historic Bank Restoration",
      category: "Restoration",
      description: "Careful restoration of a 1920s landmark bank building, preserving original architecture while adding modern functionality and safety features.",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2022",
      location: "Downtown LA, CA",
      budget: "$4.2M",
      duration: "12 months",
      rating: 5,
      features: ["Historic Preservation", "Modern Safety", "Original Architecture", "Seismic Upgrade", "Accessibility"],
      client: "Heritage Bank"
    }
  ];

  const allProjects = [
    {
      title: "Modern Family Home",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: "2023",
      location: "Beverly Hills",
      budget: "$1.2M"
    },
    {
      title: "Corporate Headquarters",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: "2023",
      location: "Century City",
      budget: "$8.5M"
    },
    {
      title: "Luxury Kitchen Remodel",
      category: "Renovation",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: "2023",
      location: "Westwood",
      budget: "$180K"
    },
    {
      title: "Medical Center Expansion",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: "2022",
      location: "Santa Monica",
      budget: "$6.2M"
    },
    {
      title: "Retail Shopping Plaza",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: "2022",
      location: "Pasadena",
      budget: "$3.8M"
    },
    {
      title: "Custom Pool & Spa",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: "2022",
      location: "Manhattan Beach",
      budget: "$450K"
    }
  ];

  const stats = [
    { icon: <Award className="h-8 w-8 text-orange-500" />, number: "500+", label: "Completed Projects" },
    { icon: <Users className="h-8 w-8 text-blue-500" />, number: "350+", label: "Happy Clients" },
    { icon: <DollarSign className="h-8 w-8 text-green-500" />, number: "$250M+", label: "Project Value" },
    { icon: <Star className="h-8 w-8 text-yellow-500" />, number: "15+", label: "Industry Awards" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Our <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Portfolio</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Explore our exceptional portfolio of construction projects that showcase 
              our commitment to quality, innovation, and architectural excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our most exceptional projects that demonstrate our expertise and attention to detail.
            </p>
          </div>
          
          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-sm font-bold">
                        {project.category}
                      </span>
                      <span className="bg-orange-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-1">
                      {Array.from({ length: project.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">{project.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">{project.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                      <span className="text-slate-600">{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-slate-600">{project.budget}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="text-slate-600">{project.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-purple-500" />
                      <span className="text-slate-600">{project.client}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">More Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse through our extensive portfolio of successful construction projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-xs font-bold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-green-500" />
                      {project.budget}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our portfolio of satisfied clients and let us bring your vision to life.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-4 text-lg">
            Start Your Project Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
