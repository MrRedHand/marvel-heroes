import React, { useEffect } from 'react';
import { MainLayout } from '../Layout/MainLayout/MainLayout';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import { AddHeroPage } from '../../pages/AddHeroPage/AddHeroPage';
import { getLocalStorageData } from '../../services/localStorage';
import { localStorageStringName } from '../../services/constants';
import { useDispatch, useSelector } from '../../store/hooks/redux-hooks';
import { addStoredHeroes } from '../../store/actions/action-creators';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localHeroes = getLocalStorageData(localStorageStringName);
    if (localHeroes.length > 0) {
      dispatch(addStoredHeroes(localHeroes));
    }
  }, []);

  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/add-hero' element={<AddHeroPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
