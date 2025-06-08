import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, id, name, placeholder, Icon, type, ...props }, ref) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-lg font-body font-medium text-gray-800"
      >
        {label}
      </label>
      <div className="mt-2 grid grid-cols-1">
        <input
          {...props}
          ref={ref}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="col-start-1 row-start-1 block w-full font-body rounded-md bg-white py-4 pr-10 pl-4 text-lg text-gray-800 placeholder:font-light outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-500"
        />
        {Icon && (
          <Icon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-4  self-center justify-self-end text-fuchsia-400 size-6"
          />
        )}
      </div>
        <span className="col-start-1 row-start-1 mt-2 text-sm text-red-500">
          {props.error}
        </span>
    </div>
  );
});

export default Input;
