import { Children } from "react";

function PageHeading({children}) {
  return (
    <h1 className="text-3xl font-display text-gray-800 font-bold py-8 flex justify-center ">
     {children}
    </h1>
  );
}

export default PageHeading;
