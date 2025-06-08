import AboutSection from "../ui/AboutSection";
import HeroSection from "../ui/HeroSection";
function HomePage() {
  return (
    <div className="grid grid-cols-10">
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default HomePage;
