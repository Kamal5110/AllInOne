import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingContact from "@/components/ui/floating-contact";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import HardwareSupport from "@/pages/hardware-support";
import BankingSupport from "@/pages/banking-support";
import WebDevelopment from "@/pages/web-development";
import HoroscopeKundli from "@/pages/horoscope-kundli";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/hardware-support" component={HardwareSupport} />
      <Route path="/banking-support" component={BankingSupport} />
      <Route path="/web-development" component={WebDevelopment} />
      <Route path="/horoscope-kundli" component={HoroscopeKundli} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <FloatingContact />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
