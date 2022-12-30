import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from '../../store/hooks/redux-hooks';
import './HeroDetails.scss';
import { Button } from '../../components/UI/Button/Button';

interface IHeroDetails {}

export const HeroDetails: FC<IHeroDetails> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const store = useSelector(state => state.main);
  const hero = store.allHeroes.find(hero => hero.id === Number(id));

  const goHome = () => {
    navigate('/marvel-heroes');
  };
  return (
    <>
      {hero && (
        <div className='hero-details'>
          <div className='hero-avatar'>
            <img src={hero.img} />
          </div>
          <div className='hero-title'>{hero.name}</div>
          <div className='hero-details'>{hero.detailText}</div>
          <Button
            value='Back to main page'
            styleType='link'
            onClick={goHome}
            className='hero-details-back'
          />
        </div>
      )}
    </>
  );
};
