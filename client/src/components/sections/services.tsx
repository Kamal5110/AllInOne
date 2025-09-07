import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Monitor, Building, Globe, Stars, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function Services() {
  const [, navigate] = useLocation();

  const navigateToService = (servicePath: string) => {
    navigate(servicePath);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const services = [
    {
      icon: Monitor,
      title: "Hardware Support 🖥️",
      description: "Complete IT hardware solutions including desktop, laptop, and printer repair & maintenance, network setup, AMC, and IT accessories supply.",
      features: [
        "Desktop & Laptop Repair",
        "Printer Maintenance",
        "Network Setup",
        "AMC Services",
        "IT Accessories Supply"
      ],
      color: "primary",
      buttonClass: "bg-primary-600 hover:bg-primary-700",
      path: "/hardware-support"
    },
    {
      icon: Building,
      title: "Banking Support 💳",
      description: "Mini banking solutions bringing financial services to your doorstep with secure and reliable transactions.",
      features: [
        "Cash Withdrawal",
        "Cash Deposit",
        "Balance Inquiry",
        "Money Transfer",
        "Bill Payment Services"
      ],
      color: "green",
      buttonClass: "bg-green-600 hover:bg-green-700",
      path: "/banking-support"
    },
    {
      icon: Globe,
      title: "Web Development & Digital 🌐",
      description: "Complete digital solutions from website design to digital marketing, helping your business succeed online.",
      features: [
        "Website Design & Development",
        "Web Hosting & Server Setup",
        "Data Backup Solutions",
        "Digital Marketing",
        "SEO Services"
      ],
      color: "purple",
      buttonClass: "bg-purple-600 hover:bg-purple-700",
      path: "/web-development"
    },
    {
      icon: Stars,
      title: "Horoscope & Kundli Making ✨",
      description: "Accurate astrological predictions and personalized Kundli reports based on ancient Vedic astrology principles.",
      features: [
        "Detailed Birth Chart Analysis",
        "Marriage Compatibility Reports",
        "Career & Finance Predictions",
        "Health & Wellness Guidance",
        "Gemstone Recommendations"
      ],
      color: "pink",
      buttonClass: "bg-pink-600 hover:bg-pink-700",
      path: "/horoscope-kundli"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your technology, banking, and digital needs
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="service-card bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`text-${service.color}-600 text-2xl h-8 w-8`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="text-left text-gray-600 mb-8 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 h-4 w-4 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => navigateToService(service.path)}
                  className={`${service.buttonClass} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                >
                  Learn More
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
