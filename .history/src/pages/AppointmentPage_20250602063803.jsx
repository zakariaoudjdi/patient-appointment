import Input from "../ui/Input";
function AppointmentPage() {
  return (
    <>
      <h1 className="text-4xl font-display text-gray-800 font-bold py-8 flex justify-center ">
        New Appointment
      </h1>
      <div className="grid grid-cols-2 gap-4 p-4">
        <Input />
        <Input />
      </div>
    </>
  );
}

export default AppointmentPage;
