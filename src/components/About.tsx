
import { CheckCircle, Award, Hammer, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-500" />,
      title: "Quality Craftsmanship",
      description: "Every project is built to the highest standards with attention to detail."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind."
    },
    {
      icon: <Hammer className="h-8 w-8 text-orange-500" />,
      title: "Expert Team",
      description: "Skilled professionals with decades of combined experience."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Customer First",
      description: "Your satisfaction is our priority from start to finish."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">About BuildTech</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              Building Excellence Since 1998
            </h2>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              For over 25 years, BuildTech has been the trusted partner for construction 
              projects throughout the region. We specialize in residential, commercial, 
              and industrial construction with an unwavering commitment to quality and innovation.
            </p>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our team of experienced professionals brings together traditional craftsmanship 
              with modern techniques to deliver exceptional results that stand the test of time.
            </p>

            <div className="flex items-center space-x-8">
              <div>
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-slate-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">25+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">100%</div>
                <div className="text-slate-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
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
