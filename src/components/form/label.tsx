import React from "react";

interface Props {
  name: string;
  children: string;
}

export default function Label({ name, children }: Props) {
  return (
    <label htmlFor={name} className='block text-sm font-semibold mb-2'>
      {children}
    </label>
  );
}
