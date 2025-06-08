import Button from "./Button";
function SubmitMessage({ children }) {
  return (
    <div className="col-span-1 flex flex-col items-start space-y-4 rounded-md bg-fuchsia-50 p-4 md:col-span-4">
      <span className="text-md text-gray-600">
        {children || "Your appointment has been successfully submitted!"}
      </span>
      <Button type="submit" style="primary">
        Submit Appointment
      </Button>
    </div>
  );
}

export default SubmitMessage;
