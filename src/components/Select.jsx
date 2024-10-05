import React, { useId } from "react";

function Select({ options, label, className, ...props }, ref) {
  /* The syntax used in option below means that if any options are available to llop on then loop or else 
ignore. If directly without checking the options are looped then in case it is null the app will crash  */
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
