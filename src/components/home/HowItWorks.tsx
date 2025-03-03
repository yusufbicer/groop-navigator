
import React from 'react';
import { ChevronRight, Truck, BarChart3, FileText } from 'lucide-react';
import Container from '@/components/ui/Container';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Create Your Account',
      description: 'Sign up for Groop in just a few minutes and get immediate access to our platform.',
      icon: <FileText className="w-10 h-10 text-groop-purple" />,
    },
    {
      id: 2,
      title: 'Connect Your Data',
      description: 'Import your inventory, orders, and supplier information to centralize your operations.',
      icon: <BarChart3 className="w-10 h-10 text-groop-purple" />,
    },
    {
      id: 3,
      title: 'Track Your Imports',
      description: 'Monitor your shipments in real-time with our intuitive dashboard and analytics.',
      icon: <Truck className="w-10 h-10 text-groop-purple" />,
    },
  ];

  return (
    <section className="py-20 bg-groop-black/80">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Groop simplifies the import process with our easy-to-use platform. Follow these steps to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="glass-panel p-8 rounded-xl backdrop-blur-sm flex flex-col items-center text-center transition-transform hover:translate-y-[-5px]"
            >
              <div className="rounded-full bg-groop-purple/10 p-5 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/70 mb-4">
                {step.description}
              </p>
              <a href="#" className="mt-auto inline-flex items-center text-groop-purple hover:text-groop-accent">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/auth" 
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-groop-purple text-white font-medium hover:bg-groop-accent transition-colors"
          >
            Get Started Now
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
