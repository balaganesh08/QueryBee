
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for individuals or small test teams",
    features: [
      "Up to 5 users",
      "100 MB storage",
      "20 AI search queries/month",
      "10 AI document actions/month",
      "Custom tags & folders",
      "Team collaboration (comments, mentions)"
    ],
    cta: "Start for free",
    ctaUrl: "https://app.querybee.io/",
    popular: false,
  },
  {
    name: "Startup",
    price: "$29",
    period: "/month",
    description: "Ideal for small and growing teams",
    features: [
      "Up to 15 users",
      "2 GB storage",
      "300 AI search queries/month",
      "100 AI document actions/month",
      "Document version history (30 days)",
      "Custom tags & folders",
      "Team collaboration (comments, mentions)",
      "Permissions & roles",
      "Email support",
      "Integrations (Slack, GDrive, Notion, etc.)",
      "Analytics & insights",
      "Early feature access"
    ],
    cta: "Start free trial",
    ctaUrl: "https://app.querybee.io/",
    popular: false,
  },
  {
    name: "Growing",
    price: "$59",
    period: "/month",
    description: "Best for scaling businesses with heavy usage",
    features: [
      "Unlimited users",
      "10 GB storage",
      "1,000 AI search queries/month",
      "500 AI document actions/month",
      "Document version history (Unlimited)",
      "Custom tags & folders",
      "Team collaboration (comments, mentions)",
      "Permissions & roles",
      "Custom branding",
      "Priority Slack access",
      "Integrations (Slack, GDrive, Notion, etc.)",
      "Analytics & insights",
      "Early feature access"
    ],
    cta: "Start free trial",
    ctaUrl: "https://app.querybee.io/",
    popular: true,
  }
];


const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-bee-blue font-medium">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Choose the plan that works best for your business needs. All plans include core QueryBee features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                plan.popular ? "border-2 border-bee-yellow relative" : "border border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-bee-yellow text-bee-navy text-xs font-bold px-3 py-1 uppercase rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="bg-white p-8">
  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
  <div className="flex items-baseline mb-4">
    <span className="text-4xl font-bold">{plan.price}</span>
    <span className="text-gray-500 ml-1">{plan.period}</span>
  </div>
  <p className="text-gray-600 mb-6">{plan.description}</p>
  
  <ul className="space-y-4 mb-8">
    {plan.features.map((feature, i) => (
      <li key={i} className="flex items-start">
        <Check size={20} className="text-bee-blue flex-shrink-0 mr-2" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
  
  <a 
    href={plan.ctaUrl} 
    className={`w-full py-3 px-6 rounded-lg transition-colors block text-center ${
      plan.popular 
        ? "bg-bee-yellow hover:bg-bee-lightYellow text-bee-navy font-medium"
        : "bg-bee-blue hover:bg-bee-navy text-white font-medium"
    }`}
  >
    {plan.cta}
  </a>
</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-gray-500 mb-4">
            Need a custom plan? Final pricing will be calculated based on storage size, user authentication costs, and AI usage.
          </p>
          <a href="#contact" className="text-bee-blue hover:text-bee-navy font-medium">
            Contact us for custom pricing →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
