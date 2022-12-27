import { FC, ReactNode } from 'react';
import './CardsWrap.scss';

interface ICardsWrap {
  children: ReactNode;
}

export const CardsWrap: FC<ICardsWrap> = ({ children }) => {
  return <div className='cards-wrap'>{children}</div>;
};
