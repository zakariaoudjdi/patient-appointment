import AppointmentForm from "../ui/AppointmentForm";
import PageHeading from "../ui/PageHeading";

function AppointmentPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-2">
      <PageHeading>Book an Appointment</PageHeading>
      <AppointmentForm />
    </div>
  );
}

export default AppointmentPage;
