import { motion } from "framer-motion";

// Logo Components
const ParceldeckLogo = () => (
  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-xs">📦</div>
  </div>
);

const ShreehariLogo = () => (
  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-lg">S</div>
  </div>
);

const RadianceLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-lg">R</div>
  </div>
);

const MaintedgeLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
    <div className="text-white font-bold text-lg">M</div>
  </div>
);

const AavGOLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-lg transform -skew-x-12">A</div>
  </div>
);

const TeroTAMLogo = () => (
  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-lg">T</div>
  </div>
);

const AsticsTechLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-lg">A</div>
  </div>
);

const AbilitiesIndiaLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center border-2 border-white">
    <div className="text-white font-bold text-sm">AIP</div>
  </div>
);

const JoyamLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-lg">J</div>
  </div>
);

const OizonLogo = () => (
  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
    <div className="text-white font-bold text-lg">O</div>
  </div>
);

const FitcastLogo = () => (
  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
    <div className="text-white font-bold text-lg">⭐</div>
  </div>
);

const ComptechLogo = () => (
  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-lg transform rotate-45">▼</div>
  </div>
);

const QLTechLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-sm">QL</div>
  </div>
);

const SystemProtectionLogo = () => (
  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-lg">🛡️</div>
  </div>
);

const WebosphereLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-green-400 to-purple-400 rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-lg">W</div>
  </div>
);

const TDCLogo = () => (
  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-sm">TDC</div>
  </div>
);

const LeelaCorpoLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-lg">L</div>
  </div>
);

const KalintisLogo = () => (
  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
    <div className="text-white font-bold text-lg">K</div>
  </div>
);

const clients = [
  {
    name: "Parceldeck",
    category: "Logistics",
    logo: ParceldeckLogo
  },
  {
    name: "Shreehari Education",
    category: "Education",
    logo: ShreehariLogo
  },
  {
    name: "Radiance Technologies",
    category: "Technology",
    logo: RadianceLogo
  },
  {
    name: "Maintedge Techlabs",
    category: "Technology",
    logo: MaintedgeLogo
  },
  {
    name: "AavGO",
    category: "Transportation",
    logo: AavGOLogo
  },
  {
    name: "TeroTAM Technolabs",
    category: "Technology",
    logo: TeroTAMLogo
  },
  {
    name: "Astics Techlabs",
    category: "Technology",
    logo: AsticsTechLogo
  },
  {
    name: "Abilities India Pistons & Rings",
    category: "Manufacturing",
    logo: AbilitiesIndiaLogo
  },
  {
    name: "Joyam",
    category: "Healthcare",
    logo: JoyamLogo
  },
  {
    name: "Oizon",
    category: "Environment",
    logo: OizonLogo
  },
  {
    name: "Fitcast",
    category: "Fitness",
    logo: FitcastLogo
  },
  {
    name: "Comptech Equipments",
    category: "Equipment",
    logo: ComptechLogo
  },
  {
    name: "QLTech",
    category: "Technology",
    logo: QLTechLogo
  },
  {
    name: "System Protection",
    category: "Security",
    logo: SystemProtectionLogo
  },
  {
    name: "Webosphere",
    category: "Web Development",
    logo: WebosphereLogo
  },
  {
    name: "TDC Contracting",
    category: "Construction",
    logo: TDCLogo
  },
  {
    name: "The Leela Corpo",
    category: "Corporate",
    logo: LeelaCorpoLogo
  },
  {
    name: "Kalintis",
    category: "Technology",
    logo: KalintisLogo
  }
];

export function Clients() {
  return (
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
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to serve a diverse range of clients across various industries with our comprehensive IT, banking, and web development solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {clients.map((client, index) => {
            const LogoComponent = client.logo;
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-center">
                  <div className="mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <LogoComponent />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-primary-600 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {client.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">18+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}