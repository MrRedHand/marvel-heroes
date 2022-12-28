import './SearchField.scss';
import React, { FC } from 'react';

interface ISearchField {
  placeholder: string;
  value: string;
  onChange: (input: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchField: FC<ISearchField> = ({ placeholder, value, onChange }) => {
  return (
    <input
      type='search'
      className='search'
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e)}
    />
  );
};
