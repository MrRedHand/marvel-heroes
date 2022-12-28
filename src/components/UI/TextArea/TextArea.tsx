import React, { FC, ReactNode } from 'react';
import './TextArea.scss';

interface ITextArea {
  placeholder: string;
  rows: number;
  value: string;
  onChange: (input: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: FC<ITextArea> = ({ placeholder, rows, value, onChange }) => {
  return (
    <textarea
      placeholder={placeholder}
      className='text-area'
      rows={rows}
      value={value}
      onChange={e => onChange(e)}
    />
  );
};
