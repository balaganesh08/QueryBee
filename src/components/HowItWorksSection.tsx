
import { Upload, Search, FileText, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: <Upload className="text-bee-blue" size={32} />,
    title: "Upload Your Documents",
    description: "Upload your existing documents, manuals, policies, and other internal resources to QueryBee."
  },
  {
    icon: <FileText className="text-bee-blue" size={32} />,
    title: "Organize & Structure",
    description: "Organize your knowledge into categories, add tags, and create clear hierarchies."
  },
  {
    icon: <Search className="text-bee-blue" size={32} />,
    title: "Search Naturally",
    description: "Ask questions in natural language and get precise answers extracted from your documents."
  },
  {
    icon: <MessageSquare className="text-bee-blue" size={32} />,
    title: "Interact & Learn",
    description: "Have follow-up conversations with the AI to get deeper insights from your knowledge base."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-bee-blue font-medium">Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            How QueryBee Works
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our simple 4-step process transforms how your business manages and accesses internal knowledge.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center relative z-10 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-bee-yellow/20 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <span className="w-8 h-8 rounded-full bg-bee-blue text-white flex items-center justify-center text-sm font-medium mb-4">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
