import { type InputHTMLAttributes, useId } from 'react';
import './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ 
  label, 
  id, 
  disabled, 
  ...props 
}: InputProps) => {
  // Gera um ID único automático caso não seja passado um.
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className="input-wrapper">
      <input
        id={inputId}
        className="input-field"
        disabled={disabled}
        placeholder=" "
        {...props}
      />
      <label htmlFor={inputId} className="input-label">
        {label}
      </label>
    </div>
  );
};
