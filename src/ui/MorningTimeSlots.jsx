import { Controller } from "react-hook-form";

const timeSlots = {
  morning: ["08:00 am", "09:00 am", "10:00 am", "11:00 am"],
  evening: ["02:00 pm", "03:00 pm", "04:00 pm"],
};

function MorningTimeSlots({ control }) {
  return (
    <div className="col-span-1">
      <h3 className="mb-2 text-lg font-semibold text-fuchsia-500">Morning</h3>
      <div className="space-y-2">
        {timeSlots.morning.map((slot) => (
          <Controller
            key={slot}
            name="appointment-time"
            control={control}
            rules={{ required: "Please select a time" }}
            render={({ field }) => (
              <label className="block cursor-pointer">
                <input
                  type="radio"
                  value={slot}
                  checked={field.value === slot}
                  onChange={field.onChange}
                  className="sr-only"
                />
                <div
                  className={`rounded-md border-2 px-4 py-2 text-center font-semibold text-fuchsia-500 ${
                    field.value === slot
                      ? "border-fuchsia-300 bg-fuchsia-100"
                      : "border-fuchsia-200 hover:bg-fuchsia-50"
                  }`}
                >
                  {slot}
                </div>
              </label>
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default MorningTimeSlots;
