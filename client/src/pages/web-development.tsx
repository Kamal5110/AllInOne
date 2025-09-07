import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Globe, Code, Server, Database, Search, TrendingUp, CheckCircle, ArrowRight, Phone } from "lucide-react";

export default function WebDevelopment() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToContact = () => {
    // Navigate to home page and scroll to contact section
    window.location.href = "/#contact";
  };

  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Custom website design and development services using modern technologies and responsive design principles.",
      features: ["Responsive Design", "Modern UI/UX", "Mobile Optimization", "Cross-browser Compatible"]
    },
    {
      icon: Server,
      title: "Web Hosting & Server Setup",
      description: "Reliable web hosting solutions with server setup, configuration, and ongoing maintenance support.",
      features: ["Fast Loading", "99.9% Uptime", "SSL Certificates", "Technical Support"]
    },
    {
      icon: Database,
      title: "Data Backup Solutions",
      description: "Comprehensive data backup and recovery solutions to protect your valuable business information.",
      features: ["Automated Backups", "Cloud Storage", "Data Recovery", "Security Encryption"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing services to boost your online presence and reach your target audience.",
      features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "Analytics Tracking"]
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Search engine optimization services to improve your website's visibility and ranking in search results.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Performance Monitoring"]
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored web applications and custom solutions built to meet your specific business requirements.",
      features: ["Custom Applications", "API Integration", "E-commerce Solutions", "CMS Development"]
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" }
  ];

  const packages = [
    {
      name: "Starter Website",
      price: "₹15,000",
      period: "/ Year",
      features: [
        "2-page responsive website",
        "Basic SEO setup",
        "Contact form",
        "Includes 1-year hosting (Domain registration is a separate cost)",
        "Mobile optimization",
        "Get 2 custom domain emails included at no cost"
      ]
    },
    {
      name: "Business Website",
      price: "₹35,000",
      period: "/ Year",
      features: [
        "5-page professional website",
        "Advanced SEO optimization",
        "Analytics setup",
        "Social media integration",
        "Includes 2-year hosting (Domain registration is a separate cost)",
        "Get 5 custom domain emails included at no cost"
      ],
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "Custom Pricing",
      period: "Talk to Us",
      features: [
        "Custom web application",
        "Database integration",
        "Admin dashboard",
        "API development",
        "E-commerce integration",
        "Advanced security",
        "Ongoing support",
        "Includes 2-year hosting (Domain registration is a separate cost)",
        "Get 5 custom domain emails included at no cost"
      ]
    },
    {
      name: "Need Help Choosing?",
      price: "Give us a call",
      period: "+91 9660306030",
      features: [
        "Free consultation",
        "Custom recommendations",
        "Project planning assistance",
        "Budget-friendly solutions",
        "Expert guidance"
      ],
      isCallOption: true
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
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Web Development & Digital Services 🌐
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Complete digital solutions from website design to digital marketing
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Web Development Showcase */}
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Web development and digital marketing" 
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
                Modern Web Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Transform your business with cutting-edge web development and digital marketing solutions. We create responsive, fast, and user-friendly websites that drive results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-gray-600">Websites Built</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">99%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
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
              Our Digital Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end digital solutions to help your business succeed online
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
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="text-purple-600 h-8 w-8" />
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

      {/* Technologies Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              Modern technologies for robust and scalable solutions
            </p>
          </motion.div>

          {/* Development Images Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Code development" 
              className="rounded-xl shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Web design" 
              className="rounded-xl shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Digital marketing" 
              className="rounded-xl shadow-lg w-full h-48 object-cover"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Development Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect package for your business needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-2xl p-8 ${
                  pkg.popular 
                    ? 'bg-purple-600 text-white shadow-xl scale-105' 
                    : pkg.isCallOption
                    ? 'bg-blue-50 border-2 border-blue-200 shadow-lg'
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  {pkg.isCallOption && (
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="text-blue-600 h-8 w-8" />
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${
                    pkg.popular ? 'text-white' : pkg.isCallOption ? 'text-blue-900' : 'text-gray-900'
                  }`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-4xl font-bold ${
                    pkg.popular ? 'text-white' : pkg.isCallOption ? 'text-blue-600' : 'text-purple-600'
                  }`}>
                    {pkg.price}
                  </div>
                  <div className={`text-lg ${
                    pkg.popular ? 'text-purple-200' : pkg.isCallOption ? 'text-blue-700' : 'text-gray-600'
                  }`}>
                    {pkg.period}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className={`mr-2 h-4 w-4 flex-shrink-0 ${
                        pkg.popular ? 'text-purple-200' : pkg.isCallOption ? 'text-blue-500' : 'text-green-500'
                      }`} />
                      <span className={
                        pkg.popular ? 'text-purple-100' : pkg.isCallOption ? 'text-blue-800' : 'text-gray-600'
                      }>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => {
                    if (pkg.name === "Enterprise Solution") {
                      navigateToContact();
                    } else if (pkg.isCallOption) {
                      window.open("tel:+919660306030", "_self");
                    } else {
                      scrollToSection("contact");
                    }
                  }}
                  className={`w-full font-semibold ${
                    pkg.popular
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : pkg.isCallOption
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {pkg.name === "Enterprise Solution" ? "Talk to Us" : pkg.isCallOption ? "Call Now" : "Get Started"}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { step: "1", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "2", title: "Design", description: "Creating wireframes and visual designs" },
              { step: "3", title: "Development", description: "Building your website with modern technologies" },
              { step: "4", title: "Launch", description: "Testing, deployment, and ongoing support" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Let's create something amazing together. Contact us to discuss your project
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
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all text-sm sm:text-base"
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