export default function TextArea() {
  return (
    <div>
      <label
        htmlFor="comment"
        className="block text-sm/6 font-medium text-gray-900"
      >
        Add your comment
      </label>
      <div className="mt-2">
        <textarea
          id="comment"
          name="comment"
          rows={4}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
