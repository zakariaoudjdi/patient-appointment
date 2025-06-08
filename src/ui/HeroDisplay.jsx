import Button from "./Button";
function HeroDisplay() {
  return (
    <div className="md:left:6 absolute bottom-4 left-4 flex flex-col items-start space-y-2 md:bottom-6 md:space-y-4 lg:bottom-10 lg:left-10 lg:space-y-6">
      <h1 className="font-display text-2xl font-bold text-white md:text-3xl lg:text-5xl">
        Welcome to Oudjdi Medical
      </h1>
      <p className="font-body w-2/3 text-sm font-light text-white lg:text-xl">
        Oudjdi Medical offers expert care tailored to your needs—from routine
        check-ups to specialized treatments.
      </p>
      <Button to="/appointment" type="primary">
        Set Appointment
      </Button>
    </div>
  );
}

export default HeroDisplay;
