import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import Events from "@/components/sections/Events";
import TechStack from "@/components/sections/TechStack";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Sponsors from "@/components/sections/Sponsors";
import Newsletter from "@/components/sections/Newsletter";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Events />
      <TechStack />
      <Team />
      <Testimonials />
      <FAQ />
      <Sponsors />
      <Newsletter />
      <CTA />
    </>
  );
}
