import React, { FC, ReactNode } from 'react';
import './FormLayout.scss';

interface IFormLayout {
  children: ReactNode;
}

export const FormLayout: FC<IFormLayout> = ({ children }) => {
  return <div className='form'>{children}</div>;
};
