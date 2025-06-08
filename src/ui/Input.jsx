import { forwardRef, useRef } from "react";
const Input = forwardRef(function Input(
  {
    label,
    id,
    name,
    placeholder,
    Icon,
    type,

    ...props
  },
  ref,
) {
  const inputRef = useRef()
  return (
    <div>
      <label
        htmlFor={id}
        className="font-body block text-lg font-medium text-gray-800"
      >
        {label}
      </label>
      <div className="mt-2 grid grid-cols-1">
        <input
          {...props}
          ref={inputRef}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="font-body col-start-1 row-start-1 block w-full rounded-md bg-white py-4 pl-4 pr-10 text-lg text-gray-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:font-light placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-500"
        />

        {Icon && (
          <Icon
            onClick={(e) => {
              e.stopPropagation();
              if (inputRef.current) {
                inputRef.current.focus();
                inputRef.current.value = "";
               
              }
            }}
            aria-hidden="true"
            className="col-start-1 row-start-1 mr-4 size-6 cursor-pointer self-center justify-self-end text-fuchsia-400"
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
