import React from "react";
import { Link } from "react-router-dom";

const Button = React.forwardRef(function Button(
  { to, children, style = "primary", ...props },
  ref,
) {

  const styles = {
    primary: `bg-fuchsia-500 font-body font-medium text-white rounded-sm hover:bg-fuchsia-600 flex items-center justify-center transition-colors duration-300 px-3 py-1.5 text-sm sm:text-base md:text-md md:px-4 py-2 lg:text-lg lg:px-4 py-2 xl:text-xl xl:px-4 py-2`,
  };

  if (to) {
    return (
      <Link {...props} ref={ref} className={styles[style]} to={to}>
        {children || "Button component"}
      </Link>
    );
  }

  return (
    <button {...props} ref={ref} className={styles[style]}>
      {children || "Button component"}
    </button>
  );
});

export default Button;
