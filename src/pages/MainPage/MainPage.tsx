import { Card } from '../../components/Card/Card';
import { initialHeroes } from '../../store/mock/initialHeroes';
import { CardsWrap } from '../../components/CardsWrap/CardsWrap';
import { MainTitle } from '../../components/UI/MainTitle/MainTitle';
import { Button } from '../../components/UI/Button/Button';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

export const MainPage = () => {
  const navigate = useNavigate();

  const goToAddHeroPage = () => {
    navigate('add-hero');
  };
  return (
    <>
      <MainTitle>MARVEL HEROES</MainTitle>
      <CardsWrap>
        {initialHeroes.map(hero => {
          return <Card avatarUrl={hero.img} title={hero.name} text={hero.text} key={uuidv4()} />;
        })}
      </CardsWrap>
      <Button value='Add hero' type='add' onClick={goToAddHeroPage} />
    </>
  );
};
