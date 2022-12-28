import './Card.scss';
import React, { FC } from 'react';
import { useNavigate } from 'react-router';

interface ICard {
  id: number;
  avatarUrl: string;
  title: string;
  text: string;
}

export const Card: FC<ICard> = ({ avatarUrl, title, text, id }) => {
  const navigate = useNavigate();
  const goTo = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(id.toString());
  };

  return (
    <a className='card' href={id.toString()} onClick={e => goTo(e)}>
      <div className='card-avatar'>{avatarUrl && <img src={avatarUrl} />}</div>
      <div className='card-description'>
        {title && <div className='card-title'>{title}</div>}
        {text && <p>{text}</p>}
      </div>
    </a>
  );
};
