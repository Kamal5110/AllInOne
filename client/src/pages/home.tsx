import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import { Clients } from "@/components/sections/clients";
import WhyChooseUs from "@/components/sections/why-choose-us";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Clients />
        <WhyChooseUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
