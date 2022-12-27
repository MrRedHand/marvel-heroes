import { Card } from '../components/Card/Card';
import { initialHeroes } from '../store/mock/initialHeroes';
import { CardsWrap } from '../components/CardsWrap/CardsWrap';
import { MainTitle } from '../components/UI/MainTitle/MainTitle';

export const MainPage = () => {
  return (
    <>
      <MainTitle>MARVEL HEROES</MainTitle>
      <CardsWrap>
        {initialHeroes.map(hero => {
          return <Card avatarUrl={hero.img} title={hero.name} text={hero.text} />;
        })}
      </CardsWrap>
    </>
  );
};
