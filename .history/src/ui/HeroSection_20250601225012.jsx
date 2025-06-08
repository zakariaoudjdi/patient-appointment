import NavigationBar from "../ui/NavigationBar";
import BackgroundImage from "./BackgroundImage";
import HeroDisplay from "./HeroDisplay";
function HeroSection() {
  return (
    <div className="col-span-10">
      <BackgroundImage />
      <HeroDisplay />
    </div>
  );
}

export default HeroSection;
