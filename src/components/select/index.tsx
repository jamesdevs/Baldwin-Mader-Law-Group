import React, { SelectHTMLAttributes, forwardRef, memo, useState } from "react";
import { FieldError } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  id: string;
  label: string;
  options: Option[];
  error?: FieldError;
  required?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { className, id, label, options, error, required, ...rest } = props;

  return (
    <div className={className}>
      <label htmlFor={id} className="input-label">
        {label}
        {required && <span className="text-red-700"> *</span>}
      </label>

      <div>
        <select id={id} className="input" ref={ref} {...rest}>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-black"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="input-error-message">{error.message}</p>}
    </div>
  );
});

export default Select;
