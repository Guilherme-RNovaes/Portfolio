import HeroSection from "./_components/hero";
import About from "./_components/about";
import Services from "./_components/services";
import Portfolio from "./_components/portfolio";
import Contact from "./_components/contact";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root className="min-h-screen flex flex-col items-center justify-center bg-background">
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </ReactLenis>
  );
}
