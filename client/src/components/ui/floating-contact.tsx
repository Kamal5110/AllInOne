import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MessageSquare, Calendar } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: Phone,
      label: "Call Office",
      href: "tel:+919660306030",
      bgColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: SiWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/919660306030",
      bgColor: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: Mail,
      label: "Email Us",
      href: "mailto:info@onestopsolutions.com",
      bgColor: "bg-red-600 hover:bg-red-700"
    },
    {
      icon: MessageSquare,
      label: "Contact Form",
      onClick: () => {
        if (window.location.pathname === "/") {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = "/";
          setTimeout(() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }
        setIsOpen(false);
      },
      bgColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: Calendar,
      label: "Book Meeting",
      onClick: () => {
        // You can replace this with your actual booking system
        window.open("https://calendly.com/onestopsolutions", "_blank");
        setIsOpen(false);
      },
      bgColor: "bg-orange-600 hover:bg-orange-700"
    }
  ];

  return (
    <>
      {/* Floating Contact Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </motion.div>

      {/* Floating Contact Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
            />

            {/* Contact Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[95vw] sm:max-w-none"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-72 sm:w-80 max-w-sm">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
                    <div className="w-12 h-0.5 bg-orange-500 mt-1"></div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Contact Options */}
                <div className="space-y-3">
                  {contactOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    
                    if (option.href) {
                      return (
                        <a
                          key={index}
                          href={option.href}
                          target={option.href.startsWith('http') ? '_blank' : '_self'}
                          rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center w-full p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors group"
                        >
                          <div className={`w-8 h-8 rounded-lg ${option.bgColor} flex items-center justify-center mr-3 transition-colors`}>
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                            {option.label}
                          </span>
                        </a>
                      );
                    } else {
                      return (
                        <button
                          key={index}
                          onClick={option.onClick}
                          className="flex items-center w-full p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors group"
                        >
                          <div className={`w-8 h-8 rounded-lg ${option.bgColor} flex items-center justify-center mr-3 transition-colors`}>
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                            {option.label}
                          </span>
                        </button>
                      );
                    }
                  })}
                </div>

                {/* Business Hours */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 text-center">
                    Mon - Sat: 9:30 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}