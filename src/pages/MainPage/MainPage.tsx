import { Card } from '../../components/Card/Card';
import { CardsWrap } from '../../components/CardsWrap/CardsWrap';
import { MainTitle } from '../../components/UI/MainTitle/MainTitle';
import { Button } from '../../components/UI/Button/Button';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { SearchField } from '../../components/UI/SearchField/SearchField';
import { useDispatch, useSelector } from '../../store/hooks/redux-hooks';
import React, { useEffect, useState } from 'react';
import { filterHeroes } from '../../store/actions/action-creators';

export const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector(state => state.main);
  const [searchValue, setSearchValue] = useState<string>('');

  const goToAddHeroPage = () => {
    navigate('add-hero');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    dispatch(filterHeroes(searchValue));
  }, [searchValue]);

  return (
    <>
      <MainTitle>MARVEL HEROES</MainTitle>
      <SearchField placeholder='search for hero' value={searchValue} onChange={handleSearch} />
      <CardsWrap>
        {searchValue.length > 0
          ? store.filteredHeroes.map(hero => {
              return (
                <Card
                  avatarUrl={hero.img}
                  title={hero.name}
                  text={hero.text}
                  key={uuidv4()}
                  id={hero.id}
                />
              );
            })
          : store.allHeroes.map(hero => {
              return (
                <Card
                  avatarUrl={hero.img}
                  title={hero.name}
                  text={hero.text}
                  key={uuidv4()}
                  id={hero.id}
                />
              );
            })}
      </CardsWrap>
      <Button value='Add hero' styleType='add' onClick={goToAddHeroPage} />
    </>
  );
};
