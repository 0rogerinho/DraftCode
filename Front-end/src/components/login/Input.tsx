import React, { useId, useState } from 'react';
import { TbEyeClosed } from 'react-icons/tb';
import { SlEye } from 'react-icons/sl';

type IInputsProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  type?: string;
  label: string;
  icon: React.JSX.Element;
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, IInputsProps>(
  ({ label, icon, error, type = 'text', ...props }, ref) => {
    const [show, setShow] = useState(false);

    const [typeT, setTypeT] = useState(type);

    const inputId = useId();

    function handleClick() {
      typeT === 'password' ? setTypeT('text') : setTypeT('password');
      setShow(!show);
    }
    return (
      <div className="relative w-full text-left space-y-1">
        <label className="text-xl" htmlFor={inputId}>
          {label}
        </label>
        <label
          htmlFor={inputId}
          className={`transition-all duration-500 flex items-center bg-white pl-3 rounded-md outline `}
        >
          {icon}
          <input
            autoComplete="none"
            type={typeT}
            id={inputId}
            className="ml-3 !w-full md:w-64 md:h-12 p-2 bg-white rounded-e-md outline-none text-black"
            placeholder={label}
            ref={ref}
            {...props}
          />
          {type === 'password' && (
            <div className="cursor-pointer pr-1" onClick={handleClick}>
              {show ? <SlEye color="black" /> : <TbEyeClosed color="black" />}
            </div>
          )}
        </label>
        {error && (
          <span className="absolute right-0 text-xs mt-1 text-red-600">
            {error}
          </span>
        )}
      </div>
    );
  },
);

export default Input;
