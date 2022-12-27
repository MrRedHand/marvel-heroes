import React from 'react';
import { MainLayout } from '../Layout/MainLayout/MainLayout';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import { AddHeroPage } from '../../pages/AddHeroPage/AddHeroPage';

function App() {
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
