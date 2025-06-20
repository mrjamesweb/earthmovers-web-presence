
import { CheckCircle, Award, Hammer, Users, Target, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 rounded-full px-6 py-3 shadow-lg">
              <Award className="h-5 w-5 mr-2 animate-bounce" />
              <span className="font-semibold">About BuildTech Construction</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
              <span className="block">Building</span>
              <span className="block text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">
                Excellence
              </span>
              <span className="block">Since 1998</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                For over <strong className="text-orange-600">25 years</strong>, BuildTech has been the trusted partner for construction 
                projects throughout the region. We specialize in residential, commercial, 
                and industrial construction with an unwavering commitment to quality and innovation.
              </p>
              
              <p className="text-lg">
                Our team of experienced professionals brings together traditional craftsmanship 
                with modern techniques to deliver exceptional results that stand the test of time.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center group">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-slate-600 font-medium">Happy Clients</div>
                <div className="w-full bg-slate-200 rounded-full h-1 mt-2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 h-1 rounded-full w-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text group-hover:scale-110 transition-transform duration-300">25+</div>
                <div className="text-slate-600 font-medium">Years Experience</div>
                <div className="w-full bg-slate-200 rounded-full h-1 mt-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full w-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-slate-600 font-medium">Satisfaction Rate</div>
                <div className="w-full bg-slate-200 rounded-full h-1 mt-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1 rounded-full w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <CardContent className="p-8 text-center relative">
                  <div className="flex justify-center mb-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className="relative">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {value.description}
                  </p>
                  
                  {/* Animated border */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
