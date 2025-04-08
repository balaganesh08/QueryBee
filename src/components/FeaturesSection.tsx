
import { Search, FileText, Users, Shield, Zap, Database, MessageSquare } from "lucide-react";

const features = [
  {
    icon: <Search size={24} />,
    title: "AI-Powered Search",
    description: "Ask questions in natural language and get precise answers from your internal documentation."
  },
  {
    icon: <FileText size={24} />,
    title: "Rich Document Editor",
    description: "Create and edit beautifully formatted documents with our intuitive rich-text editor."
  },
  {
    icon: <Database size={24} />,
    title: "Knowledge Organization",
    description: "Organize your documents into logical categories, folders, and tags for easy retrieval."
  },
  {
    icon: <Users size={24} />,
    title: "Team Collaboration",
    description: "Invite team members, assign roles, and collaborate seamlessly on documents."
  },
  {
    icon: <Shield size={24} />,
    title: "Secure Access Control",
    description: "Define who can view, edit, or manage specific documents with granular permissions."
  },
  {
    icon: <Zap size={24} />,
    title: "Instant Answers",
    description: "Get immediate responses to queries without having to read through entire documents."
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Interactive Q&A",
    description: "Enable employees to ask follow-up questions and get contextualized responses."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-bee-blue font-medium">Features</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Powerful Features for Your Knowledge Base
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            QueryBee combines cutting-edge AI technology with a user-friendly interface to deliver a comprehensive knowledge management solution for small and medium businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
