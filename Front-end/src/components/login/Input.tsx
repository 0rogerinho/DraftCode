import React, { useId } from 'react';

type IInput = {
  type: string;
  placeholder: string;
  label?: string;
  icon: React.JSX.Element;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: boolean;
  errorText?: string;
};

const Input = ({
  type,
  placeholder,
  label,
  icon,
  onChange,
  value,
  error,
}: IInput) => {
  const inputId = useId();
  const labelDefault = label ?? placeholder;
  return (
    <div className="relative w-full text-left space-y-1">
      <label className="text-xl" htmlFor={inputId}>
        {labelDefault}
      </label>
      <label
        htmlFor={inputId}
        className={`transition-all duration-500 flex items-center bg-white pl-3 rounded-md outline   ${
          error ? 'outline-2 outline-red-700' : 'outline-transparent'
        }`}
      >
        {icon}
        <input
          required
          value={value}
          onChange={onChange}
          className="ml-3 md:w-64 md:h-12 p-2 bg-white rounded-e-md outline-none text-black "
          id={inputId}
          placeholder={placeholder}
          type={type}
        />
      </label>
    </div>
  );
};

export default Input;
