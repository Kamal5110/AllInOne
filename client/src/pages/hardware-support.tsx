import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Monitor, Laptop, Printer, Network, Wrench, ShoppingCart, CheckCircle, ArrowRight, Phone } from "lucide-react";

export default function HardwareSupport() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Monitor,
      title: "Desktop Repair",
      description: "Complete desktop computer repair and maintenance services including hardware upgrades, virus removal, and performance optimization.",
      features: ["Hardware Diagnostics", "Component Replacement", "Performance Tuning", "Virus Removal"]
    },
    {
      icon: Laptop,
      title: "Laptop Repair", 
      description: "Professional laptop repair services covering screen replacement, keyboard repair, battery issues, and system optimization.",
      features: ["Screen Replacement", "Keyboard Repair", "Battery Replacement", "System Recovery"]
    },
    {
      icon: Printer,
      title: "Printer Maintenance",
      description: "Comprehensive printer repair and maintenance services for all types of printers including inkjet, laser, and multifunction devices.",
      features: ["Print Quality Issues", "Paper Jam Solutions", "Cartridge Installation", "Driver Updates"]
    },
    {
      icon: Network,
      title: "Network Setup",
      description: "Professional network installation and configuration services for homes and businesses including WiFi setup and security.",
      features: ["WiFi Configuration", "Router Setup", "Network Security", "Cable Management"]
    },
    {
      icon: Wrench,
      title: "AMC Services",
      description: "Annual Maintenance Contracts for ongoing IT support with regular system checkups and priority service calls.",
      features: ["Regular Checkups", "Priority Support", "Preventive Maintenance", "24/7 Help Desk"]
    },
    {
      icon: ShoppingCart,
      title: "IT Accessories Supply",
      description: "Wide range of IT accessories and components including cables, adapters, storage devices, and peripherals.",
      features: ["Genuine Components", "Competitive Pricing", "Fast Delivery", "Warranty Support"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Hardware Support Services 🖥️
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Complete IT hardware solutions for all your desktop, laptop, and network needs
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Hardware Support
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Hardware Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Computer hardware repair and maintenance" 
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Hardware Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our certified technicians provide comprehensive hardware support services for all your computing needs. From desktop repairs to network installations, we ensure your technology runs smoothly.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-gray-600">Devices Repaired</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">24hr</div>
                  <div className="text-gray-600">Average Turnaround</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Hardware Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional hardware support services with quick turnaround times and competitive pricing
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="text-primary-600 h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="text-green-500 mr-2 h-4 w-4 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Hardware Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Hardware Support?
            </h2>
          </motion.div>

          {/* Tech Images Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=75" 
              alt="Laptop repair service" 
              className="rounded-xl shadow-lg w-full h-48 object-cover"
              loading="lazy"
              decoding="async"
            />
            <img 
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=75" 
              alt="Network installation" 
              className="rounded-xl shadow-lg w-full h-48 object-cover"
              loading="lazy"
              decoding="async"
            />
            <img 
              src="https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=75" 
              alt="Computer components" 
              className="rounded-xl shadow-lg w-full h-48 object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: "Expert Technicians", description: "Certified professionals with years of hardware experience" },
              { title: "Quick Turnaround", description: "Most repairs completed within 24-48 hours" },
              { title: "Genuine Parts", description: "Only authentic components and accessories used" },
              { title: "Warranty Coverage", description: "All repairs backed by comprehensive warranty" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Hardware Support?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Contact us today for fast, reliable hardware repair and maintenance services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href="tel:+919660306030"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm sm:text-base"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call Now: +91 9660306030
              </a>
              <Button
                onClick={() => {
                  window.location.href = "/";
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 200);
                }}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all text-sm sm:text-base"
              >
                <ArrowRight className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Form
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}