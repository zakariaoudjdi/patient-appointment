import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Input() {
  return (
    <div>
      <label
        htmlFor="account-number"
        className="block text-sm/6 font-medium text-gray-900"
      >
        Account number
      </label>
      <div className="mt-2 grid grid-cols-1">
        <input
          id="account-number"
          name="account-number"
          type="text"
          placeholder="000-00-0000"
          className="col-start-1 row-start-1 block w-full rounded-md bg-white py-4 pr-10 pl-4 text-xl text-gray-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-500"
        />
        <IoIosCloseCircleOutline
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-4  self-center justify-self-end text-fuchsia-400 size-6"
        />
      </div>
    </div>
  );
}
