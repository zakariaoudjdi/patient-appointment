import { useForm } from "react-hook-form";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createAppointment } from "../api/createAppointment";
import PatientInfoFields from "./PatientInfoFields";
import AppointmentDateField from "./AppointmentDateField";
import MorningTimeSlots from "./MorningTimeSlots";
import EveningTimeSlots from "./EveningTimeSlots";
import SubmitMessage from "./SubmitMessage";
import Spinner from "./Spinner";
import toast from "react-hot-toast";
import useNavigateMutation from "../hooks/useNavigateMutation";

const queryClient = new QueryClient();

function AppointmentForm() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  const mutation = useNavigateMutation(
    createAppointment,
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["appointments"] });
        toast.success("Appointment set with success!");
      },
    },
    "/"
  );

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
