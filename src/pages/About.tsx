
import { CheckCircle, Award, Hammer, Users, Target, Shield, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const values = [
    {
      icon: <CheckCircle className="h-10 w-10 text-orange-500" />,
      title: "Quality Craftsmanship",
      description: "Every project is built to the highest standards with meticulous attention to detail and precision.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for complete peace of mind and protection.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Hammer className="h-10 w-10 text-green-500" />,
      title: "Expert Team",
      description: "Skilled professionals with decades of combined experience and continuous training.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="h-10 w-10 text-purple-500" />,
      title: "Customer First",
      description: "Your satisfaction is our priority from initial consultation to project completion.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="h-10 w-10 text-amber-500" />,
      title: "On-Time Delivery",
      description: "We respect your schedule and consistently deliver projects on time and within budget.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: <Award className="h-10 w-10 text-cyan-500" />,
      title: "Award Winning",
      description: "Recognized industry leader with multiple awards for excellence and innovation.",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const teamMembers = [
    {
      name: "John Mitchell",
      role: "Founder & CEO",
      experience: "30+ Years",
      specialties: ["Project Management", "Commercial Construction", "Client Relations"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Chief Operations Officer",
      experience: "25+ Years",
      specialties: ["Operations Management", "Quality Control", "Safety Compliance"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Project Manager",
      experience: "20+ Years",
      specialties: ["Residential Construction", "Renovations", "Team Leadership"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Emily Chen",
      role: "Head of Design",
      experience: "15+ Years",
      specialties: ["Architectural Design", "Interior Planning", "3D Modeling"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const milestones = [
    { year: "1998", event: "BuildTech Construction Founded", description: "Started as a small family business with big dreams" },
    { year: "2003", event: "First Major Commercial Project", description: "Completed our first office complex in downtown" },
    { year: "2008", event: "Expanded to Residential Market", description: "Began custom home construction services" },
    { year: "2012", event: "Industry Recognition", description: "Received first 'Excellence in Construction' award" },
    { year: "2018", event: "500th Project Milestone", description: "Celebrated completing our 500th successful project" },
    { year: "2023", event: "25th Anniversary", description: "Quarter-century of building excellence and trust" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              About <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">BuildTech</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              For over 25 years, we've been transforming visions into reality, 
              one exceptional construction project at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl font-bold text-slate-800">Our Story</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  Founded in 1998 by John Mitchell, BuildTech Construction began as a small, family-owned business 
                  with a simple mission: to deliver exceptional construction services with unwavering integrity 
                  and craftsmanship. What started in a garage has grown into one of the region's most trusted 
                  construction companies.
                </p>
                <p className="text-lg">
                  Over the past 25 years, we've completed over 500 projects, from custom residential homes to 
                  large-scale commercial developments. Our commitment to quality, innovation, and customer 
                  satisfaction has earned us numerous industry awards and, more importantly, the trust of 
                  our community.
                </p>
                <p className="text-lg">
                  Today, BuildTech employs over 150 skilled professionals and continues to set the standard 
                  for construction excellence. We combine traditional craftsmanship with cutting-edge 
                  technology to deliver projects that exceed expectations.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Construction site"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Team meeting"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Construction planning"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Finished project"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our experienced leaders bring decades of expertise and passion to every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-slate-600 mb-4">{member.experience}</p>
                  <div className="space-y-2">
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Our Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key milestones that have shaped BuildTech into the company we are today.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="flex items-center mb-12 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {milestone.year}
                </div>
                <div className="ml-8 flex-grow">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{milestone.event}</h3>
                  <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
