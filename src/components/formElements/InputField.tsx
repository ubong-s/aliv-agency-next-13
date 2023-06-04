"use client";

import { ChangeEvent, FC } from "react";
import { Field } from "formik";

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  label: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  autoComplete?: "on";
}

export const InputField: FC<InputProps> = ({
  id,
  name,
  type,
  placeholder,
  label,
  onChange,
  value,
  error,
  autoComplete,
}) => {
  return (
    <Field
      className={`border w-full py-4 px-6 rounded-full lg:p-6 ${
        error ? `border-red-400` : "border-ablack"
      }`}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      aria-label={label}
      value={value && value}
      onChange={onChange}
      autoComplete={autoComplete || null}
    />
  );
};
