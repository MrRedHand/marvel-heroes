import React, { FC } from 'react';
import './Button.scss';

interface IButton {
  value: string;
  styleType: TButtonTypes;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

type TButtonTypes = 'add' | 'save' | 'cancel';

export const Button: FC<IButton> = ({ value, styleType, onClick, type }) => {
  return (
    <button className={`button ${styleType}`} onClick={onClick} type={type || 'button'}>
      {value}
    </button>
  );
};
