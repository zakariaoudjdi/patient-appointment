export default function TextArea() {
  return (
    <div>
      <label
        htmlFor="comment"
        className="block text-lg font-medium font-body text-gray-800"
      >
        Medical reason for appointment
      </label>
      <div className="mt-2">
        <textarea
          id="comment"
          name="comment"
          rows={4}
          className=" font-body col-start-1 row-start-1 block w-full rounded-md bg-white py-4 pr-10 pl-4 text-lg text-gray-800 placeholder:font-light outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-500"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
