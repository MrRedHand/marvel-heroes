import React, { FC } from 'react';
import './InputField.scss';

interface IInputField {
  placeholder: string;
  value: string;
  onChange: (input: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: FC<IInputField> = ({ placeholder, value, onChange }) => {
  return (
    <input
      type='text'
      className='input-field'
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e)}
    />
  );
};
