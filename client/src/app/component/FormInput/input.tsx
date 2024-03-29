import React from "react";

const input = (props: any) => {
  const { type, id, placeholder, name, onChange } = props;
  return (
    <input
      type={type}
      id={id}
      className="mt-1 px-4 py-2 block w-full border border-gray-400 rounded-md"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};

export default input;
