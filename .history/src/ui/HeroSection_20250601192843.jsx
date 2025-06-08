import NavigationBar from "../ui/NavigationBar";
import BackgroundImage from "./BackgroundImage";
import HeroDisplay from "./HeroDisplay";
function HeroSection() {
  return (
    <div className="col-span-10" >
      <NavigationBar
        links={[
          { name: "Home", path: "/" },
          { name: "Appointment", path: "/appointment" },
          { name: "Blog", path: "/blog" },
          { name: "Contacts", path: "/contacts" },
        ]}
      />
      <BackgroundImage />
      <HeroDisplay />
    </div>
  );
}

export default HeroSection;
