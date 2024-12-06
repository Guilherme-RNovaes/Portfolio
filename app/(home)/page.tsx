import HeroSection from "./_components/hero";
import About from "./_components/about";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <HeroSection />
      <About />
    </div>
  );
}
