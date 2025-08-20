import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Headphones, Search, Monitor, Globe } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-gradient text-white section-padding relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Monitor className="h-16 w-16 text-white animate-bounce" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Globe className="h-16 w-16 text-white animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Your One Stop Solutions
            <br />
            <span className="text-orange-400">for IT, Banking & Web</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            Smart IT. Secure Banking. Stunning Websites. All Under One Roof.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              <Headphones className="mr-2 h-5 w-5" />
              Get Support
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              size="lg"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 bg-white/90"
            >
              <Search className="mr-2 h-5 w-5" />
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
