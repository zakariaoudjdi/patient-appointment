import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import Calander from "../ui/Calander";
import { IoIosCloseCircleOutline } from "react-icons/io";
function AppointmentPage() {
  return (
    <div className="px-8 py-6">
      <h1 className="text-4xl font-display text-gray-800 font-bold py-8 flex justify-center ">
        New Appointment
      </h1>
      <div className="flex">
        <div className="grid grid-cols-2 gap-4 ">
          <Input
            label="Username"
            id="username"
            name="username"
            placeholder="Enter username"
            type="text"
            Icon={IoIosCloseCircleOutline}
          />
          <Input
            label="Phone"
            id="Phone"
            name="Phone"
            type="tel"
            placeholder="Enter phone number"
            Icon={IoIosCloseCircleOutline}
          />
          <TextArea />
        </div>
        <Calander />
      </div>
    </div>
  );
}

export default AppointmentPage;
