import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Settings, Menu, X, ChevronDown, Monitor, Building, Globe, Stars } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navigateToPage = (path: string) => {
    setLocation(path);
    setIsMenuOpen(false);
    // Scroll to top when navigating to a new page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white shadow-lg"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigateToPage("/")}>
            <Settings className="text-primary-600 text-xl sm:text-2xl mr-1 sm:mr-2" />
            <span className="text-lg sm:text-xl font-bold text-gray-900">All In One</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => navigateToPage("/")}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </button>
            
            {/* Services Dropdown */}
            <div className="dropdown relative group">
              <button className="text-gray-700 hover:text-primary-600 font-medium flex items-center transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-menu absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border mt-2 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button 
                  onClick={() => navigateToPage("/hardware-support")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                >
                  <Monitor className="inline mr-2 h-4 w-4" />Hardware Support
                </button>
                <button 
                  onClick={() => navigateToPage("/banking-support")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                >
                  <Building className="inline mr-2 h-4 w-4" />Banking Support
                </button>
                <button 
                  onClick={() => navigateToPage("/web-development")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                >
                  <Globe className="inline mr-2 h-4 w-4" />Web Development
                </button>
                <button 
                  onClick={() => navigateToPage("/horoscope-kundli")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                >
                  <Stars className="inline mr-2 h-4 w-4" />Horoscope & Kundli
                </button>
              </div>
            </div>

            <button 
              onClick={() => location === "/" ? scrollToSection("about") : (() => { navigateToPage("/"); setTimeout(() => scrollToSection("about"), 200); })()}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => location === "/" ? scrollToSection("contact") : (() => { navigateToPage("/"); setTimeout(() => scrollToSection("contact"), 200); })()}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => location === "/" ? scrollToSection("contact") : (() => { navigateToPage("/"); setTimeout(() => scrollToSection("contact"), 200); })()}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Get Support
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-3">
            <button 
              onClick={() => navigateToPage("/")}
              className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2"
            >
              Home
            </button>
            <div className="py-2">
              <p className="text-sm font-medium text-gray-500 mb-2 px-2">Services</p>
              <button 
                onClick={() => navigateToPage("/hardware-support")}
                className="block w-full text-left text-gray-700 hover:text-primary-600 py-1 px-4"
              >
                Hardware Support
              </button>
              <button 
                onClick={() => navigateToPage("/banking-support")}
                className="block w-full text-left text-gray-700 hover:text-primary-600 py-1 px-4"
              >
                Banking Support
              </button>
              <button 
                onClick={() => navigateToPage("/web-development")}
                className="block w-full text-left text-gray-700 hover:text-primary-600 py-1 px-4"
              >
                Web Development
              </button>
              <button 
                onClick={() => navigateToPage("/horoscope-kundli")}
                className="block w-full text-left text-gray-700 hover:text-primary-600 py-1 px-4"
              >
                Horoscope & Kundli
              </button>
            </div>
            <button 
              onClick={() => location === "/" ? scrollToSection("about") : (() => { navigateToPage("/"); setTimeout(() => scrollToSection("about"), 200); })()}
              className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2"
            >
              About Us
            </button>
            <button 
              onClick={() => location === "/" ? scrollToSection("contact") : (() => { navigateToPage("/"); setTimeout(() => scrollToSection("contact"), 200); })()}
              className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2"
            >
              Contact
            </button>
            <Button 
              onClick={() => location === "/" ? scrollToSection("contact") : (() => { navigateToPage("/"); setTimeout(() => scrollToSection("contact"), 200); })()}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium text-center transition-colors"
            >
              Get Support
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
