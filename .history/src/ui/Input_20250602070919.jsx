export default function Input({ label, id, name, placeholder, Icon }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2 grid grid-cols-1">
        <input
          id={id}
          name={name}
          type="text"
          placeholder={placeholder}
          className="col-start-1 row-start-1 block w-full rounded-md bg-white py-4 pr-10 pl-4 text-lg text-gray-800 placeholder:font-light outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-500"
        />
        {Icon && (
          <Icon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-4  self-center justify-self-end text-fuchsia-400 size-6"
          />
        )}
      </div>
    </div>
  );
}
