
import React from "react";
import Container from "../ui/Container";
import { FileText, Package, Truck, CreditCard } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FileText className="w-12 h-12 text-groop-accent" />,
      title: "1. Register Your Vendors",
      description: "Add your Turkish vendors to your Groop account. We'll connect with them to streamline the entire process."
    },
    {
      icon: <Package className="w-12 h-12 text-groop-accent" />,
      title: "2. Place Your Orders",
      description: "Shop directly with your vendors as usual. They'll inform us when your items are ready to ship."
    },
    {
      icon: <Truck className="w-12 h-12 text-groop-accent" />,
      title: "3. Consolidate & Ship",
      description: "We collect all your orders in our Turkish warehouse, efficiently package them, and ship them as one consolidated shipment."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-groop-accent" />,
      title: "4. One Simple Payment",
      description: "Pay a single invoice for all your orders, shipping costs, and customs fees, saving on multiple international transfers."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-groop-black">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-gradient-radial from-groop-purple/10 to-transparent opacity-60"></div>
        <div className="absolute left-0 bottom-1/4 w-1/3 h-1/2 bg-gradient-radial from-groop-accent/10 to-transparent opacity-50"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px" 
          }}
        ></div>
      </div>

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient text-sm font-medium uppercase tracking-wider mb-3">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Simple Process, Powerful Results
          </h3>
          <p className="text-lg text-white/70">
            Our streamlined process makes importing from Turkey easier than ever before. Follow these simple steps to get started:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-card p-6 text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-groop-purple/10 border border-groop-purple/20">
                  {step.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">{step.title}</h4>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-16 pt-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-2xl font-semibold mb-4 text-white">
              Ready to <span className="text-gradient">Transform</span> Your Import Process?
            </h4>
            <p className="text-lg text-white/70 mb-8">
              Join thousands of businesses that have simplified their Turkish imports with Groop.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
