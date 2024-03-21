import React from "react";

const input = (props: any) => {
  const { type, id, placeholder, name } = props;
  return (
    <input
      type={type}
      id={id}
      className="mt-1 px-4 py-2 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default input;
