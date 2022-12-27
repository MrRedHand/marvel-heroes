import './Card.scss';
import React, { FC } from 'react';

interface ICard {
  avatarUrl: string;
  title: string;
  text: string;
}

export const Card: FC<ICard> = ({ avatarUrl, title, text }) => {
  const goTo = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <a className='card' onClick={e => goTo(e)}>
      <div className='card-avatar'>{avatarUrl && <img src={avatarUrl} />}</div>
      <div className='card-description'>
        {title && <div className='card-title'>{title}</div>}
        {text && <p>{text}</p>}
      </div>
    </a>
  );
};
