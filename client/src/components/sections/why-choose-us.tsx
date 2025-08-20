import { motion } from "framer-motion";
import { Users, Clock, DollarSign, Shield } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our skilled professionals have years of experience in their respective fields",
      color: "blue"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need help or have questions",
      color: "green"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality or service standards",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Trusted by Clients",
      description: "Hundreds of satisfied customers trust us with their technology needs",
      color: "purple"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
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
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose All In One?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional service and building long-term relationships with our clients
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-16 h-16 bg-${benefit.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`text-${benefit.color}-600 h-8 w-8`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
