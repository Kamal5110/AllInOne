import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, Heart, ArrowRight } from "lucide-react";

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Professional business office environment" 
              className="rounded-2xl shadow-lg w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About All In One</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to bridge the technology gap in our community, All In One has been serving businesses and individuals with comprehensive IT, banking, and digital services.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our mission is to provide reliable, fast, and affordable solutions that empower our clients to focus on what they do best while we handle their technology needs.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Target className="text-primary-600 h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Our Vision</h4>
                  <p className="text-gray-600">To be the leading provider of integrated technology solutions in our region</p>
                </div>
              </div>
              <div className="flex items-center">
                <Heart className="text-red-500 h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Our Mission</h4>
                  <p className="text-gray-600">Delivering exceptional service with integrity, innovation, and customer satisfaction</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
