import { forwardRef } from 'react';

const TextArea = forwardRef(function TextArea({ id, label, name, rows, ...props }, ref) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-lg font-medium font-body text-gray-800"
      >
       {label}
      </label>
      <div className="mt-2">
        <textarea
          id={id}
          name={name}
          rows={rows}
          ref={ref}
          {...props}
          className=" font-body col-start-1 row-start-1 block w-full rounded-md bg-white py-4 pr-10 pl-4 text-lg text-gray-800 placeholder:font-light outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-500"
          placeholder="Add your medical reason here."
        />
      </div>
        <span className="col-start-1 row-start-1 mt-2 text-sm text-red-500">
          {props.error}
        </span>
    </div>
  );
});

export default TextArea;
