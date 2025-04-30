
import { ArrowRight, Search, FileText, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-blue-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10 z-0"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-bee-yellow rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-12 h-12 bg-bee-blue rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-bee-lightBlue rounded-full opacity-20 animate-float" style={{animationDelay: '1.5s'}}></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="inline-block px-3 py-1 bg-bee-lightYellow text-bee-navy rounded-full text-sm font-medium mb-4">
                Transforming Knowledge Management
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Internal Knowledge <span className="text-gradient">Simplified</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                QueryBee helps small and medium businesses capture, organize, and retrieve internal knowledge with powerful AI. Search naturally and get instant answers from your company data.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://app.querybee.io/" className="btn-primary text-base">
              Start for free <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#features" className="btn-secondary text-base">
                Explore Features
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-bee-navy text-white p-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center px-4 py-3 bg-gray-50 rounded-lg mb-6">
                  <Search size={20} className="text-gray-400 mr-2" />
                  <div className="text-gray-500">How do I process a refund?</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-bee-lightYellow/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Answer:</span> To process a refund, log into the admin dashboard, navigate to Orders {`>`} Find the order {`>`} Click "Process Refund" and follow the verification steps. Refunds typically take 3-5 business days to appear in the customer's account.
                    </p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <FileText size={14} className="mr-1" /> 
                      <span>Source: Refund Policy Document</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                    <div className="flex items-center">
                      <Users size={16} className="text-bee-blue mr-1" />
                      <span className="text-xs text-gray-500">Relevant for: Customer Support, Finance</span>
                    </div>
                    <button className="text-xs text-bee-blue hover:text-bee-navy font-medium flex items-center">
                      More details
                      <ArrowRight size={12} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-bee-yellow/20 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-bee-blue/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

