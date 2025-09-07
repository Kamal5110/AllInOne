import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Stars, Moon, Sun, CheckCircle, ArrowRight, Phone, Clock, MapPin, User } from "lucide-react";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";

const kundliFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select your gender",
  }),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  timeOfBirth: z.string().min(1, "Time of birth is required"),
  placeOfBirth: z.string().min(2, "Place of birth must be at least 2 characters").max(100, "Place of birth must be less than 100 characters"),
  state: z.string().min(2, "State is required").max(50, "State must be less than 50 characters"),
  country: z.string().min(2, "Country is required").max(50, "Country must be less than 50 characters"),
  serviceType: z.enum(["detailed_kundli", "marriage_compatibility", "career_analysis", "health_prediction", "gemstone_recommendation"], {
    required_error: "Please select a service type",
  }),
  additionalRequests: z.string().optional(),
});

type KundliFormData = z.infer<typeof kundliFormSchema>;

export default function HoroscopeKundli() {
  const { toast } = useToast();
  
  const form = useForm<KundliFormData>({
    resolver: zodResolver(kundliFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      gender: undefined,
      dateOfBirth: "",
      timeOfBirth: "",
      placeOfBirth: "",
      state: "",
      country: "India",
      serviceType: undefined,
      additionalRequests: "",
    },
  });

  const createWhatsAppMessage = (data: KundliFormData) => {
    const serviceNames = {
      detailed_kundli: "Detailed Kundli Report",
      marriage_compatibility: "Marriage Compatibility Analysis",
      career_analysis: "Career & Finance Analysis",
      health_prediction: "Health & Wellness Predictions",
      gemstone_recommendation: "Gemstone Recommendations"
    };

    const message = `🪐 *New Kundli Service Request*

👤 *Personal Details:*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Gender: ${data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}

🎂 *Birth Information:*
Date of Birth: ${data.dateOfBirth}
Time of Birth: ${data.timeOfBirth}
Place of Birth: ${data.placeOfBirth}, ${data.state}, ${data.country}

🔮 *Service Requested:*
${serviceNames[data.serviceType as keyof typeof serviceNames]}

${data.additionalRequests ? `💬 *Additional Requests:*\n${data.additionalRequests}\n` : ""}
---
📅 *Submitted:* ${new Date().toLocaleString()}
🌐 *Source:* All In One Horoscope & Kundli Service`;

    return encodeURIComponent(message);
  };

  const mutation = useMutation({
    mutationFn: async (data: KundliFormData) => {
      try {
        const response = await apiRequest("POST", "/api/kundli", data);
        return response.json();
      } catch (error) {
        console.log("Backend unavailable, proceeding with WhatsApp-only flow");
        return { success: true, message: "Request will be sent via WhatsApp" };
      }
    },
    onSuccess: (_, data) => {
      const whatsappMessage = createWhatsAppMessage(data);
      const whatsappUrl = `https://wa.me/919660306030?text=${whatsappMessage}`;
      
      toast({
        title: "Request Submitted Successfully! 🎉",
        description: "Opening WhatsApp to send your Kundli request details...",
        duration: 5000,
      });

      // Open WhatsApp with formatted message
      window.open(whatsappUrl, "_blank");
      
      // Reset form after successful submission
      form.reset();
    },
    onError: () => {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: KundliFormData) => {
    mutation.mutate(data);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Stars,
      title: "Detailed Kundli Report",
      description: "Complete birth chart analysis with planetary positions, houses, and their detailed interpretations.",
      features: ["Birth Chart Analysis", "Planetary Positions", "Dasha Predictions", "Life Events Timeline"],
      color: "purple",
      price: "₹999"
    },
    {
      icon: Moon,
      title: "Marriage Compatibility",
      description: "Comprehensive compatibility analysis for couples based on their birth charts and planetary positions.",
      features: ["Guna Milan Analysis", "Mangal Dosha Check", "Compatibility Score", "Remedial Measures"],
      color: "pink",
      price: "₹1,499"
    },
    {
      icon: Sun,
      title: "Career & Finance Analysis",
      description: "Detailed analysis of career prospects, business opportunities, and financial predictions.",
      features: ["Career Guidance", "Business Timing", "Financial Prospects", "Professional Success"],
      color: "orange",
      price: "₹799"
    }
  ];

  const additionalServices = [
    {
      title: "Health & Wellness Predictions",
      description: "Health analysis based on planetary influences",
      price: "₹699"
    },
    {
      title: "Gemstone Recommendations",
      description: "Personalized gemstone suggestions for better fortune",
      price: "₹499"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white pt-24 pb-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 opacity-20">
            <Stars className="h-16 w-16 text-white animate-pulse" />
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <Moon className="h-16 w-16 text-white animate-bounce" />
          </div>
          <div className="absolute top-1/2 left-1/4 opacity-10">
            <Sun className="h-24 w-24 text-yellow-300 animate-spin" style={{animationDuration: "20s"}} />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Horoscope & Kundli Making ✨
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Discover Your Destiny with Accurate Birth Chart Analysis & Astrological Predictions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("kundli-form")}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
              >
                <Stars className="mr-2 h-5 w-5" />
                Get Your Kundli
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                size="lg"
                className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                <Sun className="mr-2 h-5 w-5" />
                View Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Astrology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Astrology zodiac wheel and celestial charts" 
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
                Ancient Wisdom, Modern Insights
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Unlock the secrets of your destiny with our comprehensive Kundli and horoscope services. Our expert astrologers combine traditional Vedic astrology with modern interpretation techniques to provide you with accurate and meaningful guidance.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">1000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Astrology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive astrological services to guide you through life's journey
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mb-6`}>
                    <IconComponent className={`text-${service.color}-600 h-8 w-8`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="text-green-500 mr-2 h-4 w-4 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                    <Button
                      onClick={() => scrollToSection("kundli-form")}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Order Now
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md border border-gray-100 p-4 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-purple-600">{service.price}</span>
                    <Button
                      onClick={() => scrollToSection("kundli-form")}
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 text-white ml-2"
                    >
                      Order
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Kundli Form Section */}
      <section id="kundli-form" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Personalized Kundli
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below with your accurate birth details to receive your personalized horoscope
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 backdrop-blur-sm relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-200/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/20 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
              <CardHeader className="text-center relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <Stars className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Kundli Request Form</CardTitle>
                <CardDescription className="text-lg text-gray-700">
                  ✨ Provide accurate birth information for precise astrological predictions ✨
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                    {/* Personal Information */}
                    <div className="space-y-6 p-6 bg-white/60 rounded-xl shadow-sm border border-purple-100">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} data-testid="input-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Gender *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} data-testid="select-gender">
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select gender" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="male">Male</SelectItem>
                                  <SelectItem value="female">Female</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
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
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your phone number" {...field} data-testid="input-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Birth Information */}
                    <div className="space-y-6 p-6 bg-white/60 rounded-xl shadow-sm border border-pink-100">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Birth Information</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="dateOfBirth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date of Birth *</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} data-testid="input-date-of-birth" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="timeOfBirth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Time of Birth *</FormLabel>
                              <FormControl>
                                <Input type="time" {...field} data-testid="input-time-of-birth" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Location Information */}
                    <div className="space-y-6 p-6 bg-white/60 rounded-xl shadow-sm border border-orange-100">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Birth Location</h3>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="placeOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Place of Birth (City) *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter city of birth" {...field} data-testid="input-place-of-birth" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State/Province *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter state/province" {...field} data-testid="input-state" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter country" {...field} data-testid="input-country" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Service Type */}
                    <div className="space-y-6 p-6 bg-white/60 rounded-xl shadow-sm border border-purple-200">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                          <Stars className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Service Selection</h3>
                      </div>

                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select Service Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value} data-testid="select-service-type">
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choose the service you need" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="detailed_kundli">Detailed Kundli Report - ₹999</SelectItem>
                                <SelectItem value="marriage_compatibility">Marriage Compatibility - ₹1,499</SelectItem>
                                <SelectItem value="career_analysis">Career & Finance Analysis - ₹799</SelectItem>
                                <SelectItem value="health_prediction">Health & Wellness Predictions - ₹699</SelectItem>
                                <SelectItem value="gemstone_recommendation">Gemstone Recommendations - ₹499</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="additionalRequests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Requests (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any specific questions or additional requirements..."
                                className="min-h-[100px]"
                                {...field}
                                data-testid="textarea-additional-requests"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Phone className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-purple-700 mb-2">
                            📱 WhatsApp Integration Active
                          </p>
                          <p className="text-sm text-gray-700 mb-2">
                            Your request will be sent directly to our expert astrologers via WhatsApp for quick processing and personalized consultation.
                          </p>
                          <p className="text-xs text-gray-600 italic">
                            * All fields marked with asterisk are required for accurate predictions
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white py-4 text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200"
                      disabled={mutation.isPending}
                      data-testid="button-submit-kundli"
                    >
                      {mutation.isPending ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing Your Request...
                        </>
                      ) : (
                        <>
                          <Stars className="mr-2 h-6 w-6 animate-pulse" />
                          Get My Personalized Kundli Report
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discover Your Cosmic Blueprint?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Get personalized astrological guidance from our expert astrologers
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
                onClick={() => scrollToSection("kundli-form")}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all text-sm sm:text-base"
              >
                <Stars className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Order Kundli
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}