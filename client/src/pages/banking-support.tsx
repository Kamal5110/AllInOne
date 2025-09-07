import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CreditCard, DollarSign, ArrowUpDown, FileText, Smartphone, Shield, CheckCircle, ArrowRight, Phone } from "lucide-react";

export default function BankingSupport() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: DollarSign,
      title: "Cash Withdrawal",
      description: "Convenient cash withdrawal services available at your location with secure transaction processing.",
      features: ["Secure Transactions", "Multiple Denominations", "Instant Processing", "Receipt Generation"]
    },
    {
      icon: CreditCard,
      title: "Cash Deposit",
      description: "Safe and reliable cash deposit services with real-time account updates and transaction confirmations.",
      features: ["Real-time Updates", "Secure Handling", "Account Verification", "Deposit Receipts"]
    },
    {
      icon: FileText,
      title: "Balance Inquiry",
      description: "Quick balance inquiry services to check your account status and recent transaction history.",
      features: ["Account Balance", "Transaction History", "Mini Statements", "Multiple Account Support"]
    },
    {
      icon: ArrowUpDown,
      title: "Money Transfer",
      description: "Fast and secure money transfer services between accounts and to other beneficiaries.",
      features: ["Instant Transfers", "Inter-bank Support", "Beneficiary Management", "Transfer Limits"]
    },
    {
      icon: Smartphone,
      title: "Bill Payment",
      description: "Convenient bill payment services for utilities, mobile recharges, and other essential services.",
      features: ["Utility Bills", "Mobile Recharge", "Insurance Premiums", "Loan EMIs"]
    },
    {
      icon: Shield,
      title: "Secure Banking",
      description: "All transactions are secured with bank-grade encryption and follow strict security protocols.",
      features: ["Bank-grade Security", "Encrypted Transactions", "Fraud Protection", "Compliance Standards"]
    }
  ];

  const benefits = [
    {
      title: "Doorstep Banking",
      description: "Banking services brought directly to your location for convenience"
    },
    {
      title: "Secure Transactions",
      description: "All transactions protected with advanced security measures"
    },
    {
      title: "Quick Processing",
      description: "Fast transaction processing with minimal waiting time"
    },
    {
      title: "Multiple Services",
      description: "Wide range of banking services available at one place"
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
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Banking Support Services 💳
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
              Mini banking solutions bringing financial services to your doorstep
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Banking Support
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Banking Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Secure Mini Banking Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Experience convenient banking services at your doorstep. Our mini banking solutions bring essential financial services directly to your location with bank-grade security.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">₹25K</div>
                  <div className="text-gray-600">Daily Limit</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600">Secure</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Banking and financial services" 
                className="rounded-2xl shadow-lg w-full h-auto"
                loading="lazy"
                decoding="async"
              />
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
              Our Banking Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mini banking solutions with secure and reliable financial services
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
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="text-green-600 h-8 w-8" />
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

      {/* Security & Trust Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security & Trust
            </h2>
            <p className="text-xl text-gray-600">
              Your financial security is our top priority
            </p>
          </motion.div>

          {/* Banking Images Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="ATM and cash services" 
              className="rounded-xl shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Mobile banking" 
              className="rounded-xl shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Secure transactions" 
              className="rounded-xl shadow-lg w-full h-48 object-cover"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
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

      {/* Operating Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Convenient Banking Hours
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our mini banking services are available during extended hours to serve you better.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-900">Sunday</span>
                  <span className="text-red-600">Closed</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transaction Limits</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Daily Withdrawal Limit</span>
                  <span className="font-semibold text-green-600">₹25,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Daily Deposit Limit</span>
                  <span className="font-semibold text-green-600">₹50,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Transfer Limit</span>
                  <span className="font-semibold text-green-600">₹1,00,000</span>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-600">
                    * Limits may vary based on account type and bank policies
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Banking Services?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Contact us for secure and convenient mini banking solutions
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
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all text-sm sm:text-base"
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