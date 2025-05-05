
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CTASection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://formsubmit.co/ajax/aditya@querybee.io", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) throw new Error("Failed to send");
  
      toast({
        title: "Submission Successful!",
        description: "Thanks for joining our waitlist. We'll contact you soon!",
      });
  
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-bee-navy to-bee-blue text-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Knowledge Management?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join 50+ small and medium businesses already using QueryBee to power their internal knowledge base. Join our waitlist today!
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 max-w-xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Full Name" 
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-bee-yellow/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-sm text-bee-yellow mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Company Name" 
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-bee-yellow/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-sm text-bee-yellow mt-1" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Email Address" 
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-bee-yellow/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-sm text-bee-yellow mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="Phone Number" 
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-bee-yellow/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-sm text-bee-yellow mt-1" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          rows={4}
                          placeholder="Tell us about your needs" 
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-bee-yellow/50 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-bee-yellow mt-1" />
                    </FormItem>
                  )}
                />
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-bee-yellow hover:bg-bee-lightYellow text-bee-navy font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Join the Waitlist"}
                  {!isSubmitting && <ArrowRight size={18} className="ml-2" />}
                </button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
