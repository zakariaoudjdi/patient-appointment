import { useForm } from "react-hook-form";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createAppointment } from "../api/createAppointment";
import PatientInfoFields from "../ui/PatientInfoFields";
import AppointmentDateField from "../ui/AppointmentDateField";
import MorningTimeSlots from "../ui/MorningTimeSlots";
import EveningTimeSlots from "../ui/EveningTimeSlots";
import SubmitMessage from "../ui/SubmitMessage";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";

const queryClient = new QueryClient();

function AppointmentForm() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
      toast.success("Appointment set with success!");
      navigate("/");
    },
  });

  function onSubmit(data) {
    console.log(data);
    mutation.mutate(data);
  }

  if (mutation.isPending) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <Spinner />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-4 p-2 md:grid-cols-8 lg:grid-cols-12"
    >
      <PatientInfoFields register={register} errors={errors} />
      <AppointmentDateField control={control} errors={errors} />
      <div className="col-span-1 grid grid-cols-2 gap-2 md:col-span-4">
        <MorningTimeSlots control={control} />
        <EveningTimeSlots control={control} />
      </div>
      <SubmitMessage>
        By submitting this form, you confirm that the information provided is
        accurate and will be used to help us manage your appointment
        efficiently.
      </SubmitMessage>
    </form>
  );
}

export default function AppointmentFormWithProvider(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppointmentForm {...props} />
    </QueryClientProvider>
  );
}
