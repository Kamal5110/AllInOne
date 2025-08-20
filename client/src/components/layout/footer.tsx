import { Settings } from "lucide-react";
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Settings className="text-primary-400 h-8 w-8 mr-2" />
              <span className="text-xl font-bold">All In One</span>
            </div>
            <p className="text-gray-400 mb-4">
              Smart IT. Secure Banking. Stunning Websites. All Under One Roof.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiX className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Hardware Support
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Banking Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Digital Marketing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <span className="mr-2">📞</span>+91 9660306030
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>info@allinonepay.in
              </p>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-t border-gray-800 pt-8">
          {/* Head Office */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Head Office – Ahmedabad</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>Office No. - 2, 2B Darmanagar, Nr. BOB Bank<br />Sabarmati, Ahmedabad, Gujarat - 380005</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>+(91) - 9649410824
              </p>
            </div>
          </div>

          {/* Branch Office */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Branch Office – Swaroopganj</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>Shree Mayank Computers, Opp. High School<br />Sawaroupganj, Sirohi, Rajasthan - 307023</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>+(91) - 9660306030
              </p>
            </div>
          </div>

          {/* International Office */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">International Office – USA</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>30 North Gould Street, Suite R<br />Sheridan, Wyoming 82801, (USA)</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>+1 (917) 245-2515
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 All In One. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
