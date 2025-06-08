import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Input({
  label = "Account number",
  id = "account-number",
  name = "account-number",
  type = "text",
  placeholder = "000-00-0000",
  value,
  onChange,
  Icon
  ...props
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2 grid grid-cols-1">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="col-start-1 row-start-1 block w-full rounded-md bg-white py-4 pr-10 pl-4 text-lg text-gray-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-500"
          {...props}
        />
        <Icon aria-hidden="true" {...iconProps} />
      </div>
    </div>
  );
}
