
import { Clock, TrendingUp, Users, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: <Clock size={36} className="text-bee-yellow" />,
    title: "Save Time",
    description: "Reduce time spent searching for information by up to 70%. Employees can find what they need in seconds instead of minutes or hours."
  },
  {
    icon: <TrendingUp size={36} className="text-bee-yellow" />,
    title: "Boost Productivity",
    description: "Streamline operations and eliminate information silos. Teams work faster with instant access to company knowledge."
  },
  {
    icon: <Users size={36} className="text-bee-yellow" />,
    title: "Faster Onboarding",
    description: "New employees can quickly get up to speed by asking questions about company processes, policies, and procedures."
  },
  {
    icon: <DollarSign size={36} className="text-bee-yellow" />,
    title: "Reduce Costs",
    description: "Lower support costs and minimize repetitive queries. Pay only for what you need with our flexible pricing plans."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-bee-blue font-medium">Benefits</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Why Small and Medium Businesses Choose QueryBee
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Designed to address the knowledge management challenges faced by small and medium businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-bee-blue/5 rounded-2xl border border-bee-blue/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:max-w-lg mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2">
                Ready for a more efficient workplace?
              </h3>
              <p className="text-gray-600">
                Join the many businesses already using QueryBee to transform their knowledge management.
              </p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
