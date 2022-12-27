import React, { FC, ReactNode } from 'react';
import './MainTitle.scss';

interface IMainTitle {
  children: ReactNode;
}

export const MainTitle: FC<IMainTitle> = ({ children }) => {
  return <div className='main-title'>{children}</div>;
};
