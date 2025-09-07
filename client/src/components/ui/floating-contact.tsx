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
      href: "mailto:info@allinonepay.in",
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
        // Scroll to contact form instead of external site
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
      },
      bgColor: "bg-orange-600 hover:bg-orange-700"
    }
  ];

  return (
    <>
      {/* Floating Contact Button */}
      <motion.div
        className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 z-50 mb-safe"
        style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
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
              initial={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed bottom-20 right-2 sm:bottom-24 sm:right-6 z-50"
              style={{ bottom: "max(5rem, calc(env(safe-area-inset-bottom) + 4rem))" }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-[calc(100vw-1rem)] max-w-xs sm:max-w-sm mx-auto">
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