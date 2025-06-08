import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import { IoIosCloseCircleOutline } from "react-icons/io";

function PatientInfoFields({ register, errors }) {
  return (
    <div className="col-span-1 md:col-span-4 space-y-6">
      <Input
        label="Username"
        id="username"
        name="username"
        placeholder="Enter username"
        type="text"
        Icon={IoIosCloseCircleOutline}
        {...register("username", { required: "Username is required" })}
        error={errors.username?.message}
      />
      <Input
        label="Phone"
        id="phone"
        name="phone"
        type="tel"
        placeholder="Enter phone number"
        Icon={IoIosCloseCircleOutline}
        {...register("phone", {
          required: "Phone is required",
          pattern: {
            value: /^[0-9]{10,15}$/,
            message: "Enter a valid phone number",
          },
        })}
        error={errors.Phone?.message}
      />
      <TextArea
        id="medical-reason"
        label="Medical reason"
        name="medical-reason"
        rows={6}
        placeholder="Please describe your medical reason for the appointment"
        {...register("medical-reason", {
          required: "Medical reason is required",
          minLength: {
            value: 10,
            message: "Please provide more details (min 10 characters)",
          },
        })}
        error={errors["medical-reason"]?.message}
      />
    </div>
  );
}

export default PatientInfoFields;
