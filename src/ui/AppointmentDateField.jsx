import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AppointmentDateField({ control, errors }) {
  return (
    <div className="col-span-1 md:col-span-4">
      <label className="font-body mb-2 block text-lg font-medium text-gray-800">
        Appointment Date
      </label>
      <Controller
        control={control}
        name="appointment-date"
        rules={{ required: "Appointment date is required" }}
        defaultValue={null}
        render={({ field }) => (
          <DatePicker
            placeholderText="Select a date"
            onChange={(date) => {
              if (date) {
                const d = new Date(date);
                const formatted = `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth()+1).toString().padStart(2, '0')}/${d.getFullYear()}`;
                field.onChange(formatted);
              } else {
                field.onChange("");
              }
            }}
            selected={field.value ? new Date(field.value.split('/').reverse().join('-')) : null}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            inline
          />
        )}
      />
      {errors.appointmentDate && (
        <span className="text-sm text-red-500">
          {errors["appointment-date"].message}
        </span>
      )}
    </div>
  );
}

export default AppointmentDateField;
