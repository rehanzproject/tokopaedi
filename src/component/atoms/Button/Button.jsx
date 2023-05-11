import React from "react";

function Button({children}) {
  return (
    <button className="rounded-2xl bg-yellow-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
      {children}
    </button>
  );
}

export default Button;
