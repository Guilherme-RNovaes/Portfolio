import HeroSection from "./_components/hero";
import About from "./_components/about";
import Services from "./_components/services";
import Portfolio from "./_components/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
}
