import Input from "../ui/Input";
function AppointmentPage() {
  return (
    <div>
      <h1 className="text-4xl font-display text-gray-800 font-bold py-8 flex justify-center ">
        New Appointment
      </h1>
      <div>
        <Input />
      </div>
    </div>
  );
}

export default AppointmentPage;
