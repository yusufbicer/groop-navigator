
import React from "react";
import Button from "../ui/CustomButton";
import Container from "../ui/Container";
import { Play, ArrowRight, CheckCircle } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-groop-black">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-groop-purple/10 to-transparent opacity-70"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-groop-accent/20 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-groop-purple/20 to-transparent opacity-50"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px" 
          }}
        ></div>
      </div>

      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-groop-purple/30 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-groop-accent animate-pulse"></span>
                <span className="text-sm font-medium text-white">Now Available in Beta</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight tracking-tight animate-fade-in">
              Simplify Your Imports <br />
              <span className="text-gradient">with Groop</span>
            </h1>
            
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in animate-delay-100">
              Your all-in-one platform for consolidating shipping, documentation, 
              and payments from multiple Turkish vendors. Save time, reduce costs, 
              and streamline your import business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8 animate-fade-in animate-delay-200">
              <Button size="lg" className="group">
                Get Started 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-white/70 animate-fade-in animate-delay-300">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-groop-accent mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-groop-accent mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-groop-accent mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in animate-delay-400">
            <div className="relative w-full max-w-lg">
              {/* Purple glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-groop-purple to-groop-accent opacity-70 blur-lg rounded-lg"></div>
              
              {/* Dashboard preview */}
              <div className="relative glass-panel rounded-lg overflow-hidden border border-white/20">
                <img 
                  src="https://placehold.co/600x400/1A2138/FFFFFF?text=Groop+Dashboard" 
                  alt="Groop Dashboard Preview" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                
                {/* Floating elements for visual interest */}
                <div className="absolute top-6 right-6 px-3 py-1.5 bg-groop-accent/90 rounded-md text-xs font-medium text-white animate-pulse-subtle">
                  Live Updates
                </div>
                
                <div className="absolute bottom-6 left-6 p-3 glass-panel rounded-lg backdrop-blur-md shadow-lg animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-groop-purple/30 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-groop-purple"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-white/90">Shipment Status</span>
                      <span className="text-sm font-medium text-white">On Schedule</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
