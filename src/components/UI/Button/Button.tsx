import React, { FC } from 'react';
import './Button.scss';

interface IButton {
  value: string;
  type: TButtonTypes;
  onClick: () => void;
}

type TButtonTypes = 'add' | 'save' | 'cancel';

export const Button: FC<IButton> = ({ value, type, onClick }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {value}
    </button>
  );
};
