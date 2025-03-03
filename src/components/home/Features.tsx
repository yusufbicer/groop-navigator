
import React from "react";
import Container from "../ui/Container";
import { Truck, FileText, CreditCard, BarChart, Search, Map } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description,
  delay
}) => {
  return (
    <div className={`glass-card p-6 opacity-0 animate-fade-in ${delay}`}>
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-groop-purple/20 text-groop-purple">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Shipping Consolidation",
      description: "Combine multiple orders into single shipments to save on freight costs and simplify logistics.",
      delay: "animate-delay-100"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Document Management",
      description: "Centralize all import documentation in one secure platform for easy access and organization.",
      delay: "animate-delay-200"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Consolidation",
      description: "Make a single payment for multiple vendors, eliminating international transfer fees and complexity.",
      delay: "animate-delay-300"
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "Real-time Tracking",
      description: "Monitor your shipments with precision from pickup to delivery with interactive visual tracking.",
      delay: "animate-delay-400"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics Dashboard",
      description: "Gain insights into your import operations with comprehensive data visualization and reporting.",
      delay: "animate-delay-500"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Vendor Discovery",
      description: "Find and connect with trusted Turkish vendors directly through our verified network.",
      delay: "animate-delay-600"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient text-sm font-medium uppercase tracking-wider mb-3">Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Everything you need to streamline your imports
          </h3>
          <p className="text-lg text-white/70">
            Our all-in-one platform combines powerful tools to simplify every aspect of importing from Turkey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
