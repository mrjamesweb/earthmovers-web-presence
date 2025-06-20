
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h100v100H0z\" fill=\"%23334155\"/%3E%3Cpath d=\"M0 0h50v50H0z\" fill=\"%23475569\"/%3E%3Cpath d=\"M50 50h50v50H50z\" fill=\"%23475569\"/%3E%3C/svg%3E')"
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 mr-2 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">25+ Years of Excellence</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Building Your
            <span className="text-orange-400"> Dreams</span>
            <br />
            Into Reality
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            From residential homes to commercial projects, we deliver exceptional construction 
            services with unmatched quality and craftsmanship. Your vision, our expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg"
            >
              View Our Work
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-2">
                <Calendar className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-2xl font-bold">500+</span>
              </div>
              <p className="text-slate-300">Projects Completed</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-2">
                <Users className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-2xl font-bold">25+</span>
              </div>
              <p className="text-slate-300">Years Experience</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-2">
                <Award className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-2xl font-bold">100%</span>
              </div>
              <p className="text-slate-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
