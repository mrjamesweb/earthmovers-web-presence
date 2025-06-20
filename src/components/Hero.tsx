
import { ArrowRight, Award, Users, Calendar, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="grid grid-cols-8 gap-4 opacity-5 animate-fade-in">
            {Array.from({ length: 64 }).map((_, i) => (
              <div 
                key={i} 
                className="w-8 h-8 border border-white/20 transform rotate-45 animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <Award className="h-5 w-5 mr-3 text-orange-400 animate-bounce" />
              <span className="text-orange-300 font-medium">25+ Years of Construction Excellence</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block animate-slide-in-right">Building</span>
              <span className="block text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                Dreams
              </span>
              <span className="block animate-slide-in-right" style={{ animationDelay: '0.4s' }}>Into Reality</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Transform your vision into exceptional structures with our award-winning construction expertise. 
              Where innovation meets craftsmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg group shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg group backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Stats Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 mr-3 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-slate-300">Successful Projects</p>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full w-4/5 animate-pulse"></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 mr-3 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-bold text-white">25+</span>
              </div>
              <p className="text-slate-300">Years Experience</p>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-full animate-pulse"></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group" style={{ animationDelay: '1.4s' }}>
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 mr-3 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-bold text-white">100%</span>
              </div>
              <p className="text-slate-300">Client Satisfaction</p>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full w-full animate-pulse"></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group" style={{ animationDelay: '1.6s' }}>
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 mr-3 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-bold text-white">15+</span>
              </div>
              <p className="text-slate-300">Industry Awards</p>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-600 h-2 rounded-full w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
