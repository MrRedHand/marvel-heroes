import React, { FC } from 'react';
import './Button.scss';

interface IButton {
  value: string;
  styleType: TButtonTypes;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

type TButtonTypes = 'add' | 'save' | 'cancel' | 'link';

export const Button: FC<IButton> = ({
  value,
  styleType,
  onClick,
  type,
  disabled = false,
  className
}) => {
  return (
    <button
      className={`button ${styleType} ${className}`}
      onClick={onClick}
      type={type || 'button'}
      disabled={disabled}
    >
      {value}
    </button>
  );
};
