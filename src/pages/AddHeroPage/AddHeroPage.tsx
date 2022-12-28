import { MainTitle } from '../../components/UI/MainTitle/MainTitle';
import { FormLayout } from '../../components/Layout/FormLayout/FormLayout';
import { InputField } from '../../components/UI/InputField/InputField';
import { TextArea } from '../../components/UI/TextArea/TextArea';
import React, { useEffect, useState } from 'react';
import { Button } from '../../components/UI/Button/Button';
import { useDispatch, useSelector } from '../../store/hooks/redux-hooks';
import { addNewHero } from '../../store/actions/action-creators';
import { useNavigate } from 'react-router';
import { setLocalStorageData } from '../../services/localStorage';
import { localStorageStringName } from '../../services/constants';
import { IHero } from '../../utils/types';
import { TAppThunk } from '../../store/utils/types';
import { Dispatch } from 'redux';

export const AddHeroPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector(state => state.main);

  let firstStoreState: IHero[];

  const [heroName, setHeroName] = useState<string>('');
  const [heroImgUrl, setHeroImgUrl] = useState<string>('');
  const [heroIntro, setHeroIntro] = useState<string>('');
  const [heroDetail, setHeroDetail] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [newHero, setNewHero] = useState<IHero | null>(null);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeroName(e.target.value);
  };

  const handleImgUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeroImgUrl(e.target.value);
  };

  const handleHeroIntroText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHeroIntro(e.target.value);
  };

  const handleHeroDetailText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHeroDetail(e.target.value);
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewHero({
      id: store.allHeroes.length + 1,
      img: heroImgUrl,
      name: heroName,
      text: heroIntro,
      detailText: heroDetail
    });
  };

  useEffect(() => {
    firstStoreState = { ...store.allHeroes };
  }, []);

  useEffect(() => {
    if (newHero !== null) {
      dispatch(addNewHero(newHero));
    }
  }, [newHero]);

  useEffect(() => {
    if (JSON.stringify(firstStoreState) !== JSON.stringify({ ...store.allHeroes })) {
      setLocalStorageData(localStorageStringName, store.allHeroes);
      navigate('/');
    }
  }, [store]);

  useEffect(() => {
    if (
      heroName.length > 0 &&
      heroImgUrl.length > 0 &&
      heroIntro.length > 0 &&
      heroDetail.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [heroName, heroImgUrl, heroIntro, heroDetail]);

  const cancelAddingHero = () => {
    navigate('/');
  };

  return (
    <>
      <MainTitle>Let's add hero!</MainTitle>
      <FormLayout>
        <form onSubmit={e => handleSubmitForm(e)}>
          <InputField placeholder='Hero name' onChange={handleName} value={heroName} />
          <InputField placeholder='Hero image url' onChange={handleImgUrl} value={heroImgUrl} />
          <TextArea
            placeholder='Intro text for main page'
            rows={2}
            onChange={handleHeroIntroText}
            value={heroIntro}
          />
          <TextArea
            placeholder='Detail text'
            rows={5}
            onChange={handleHeroDetailText}
            value={heroDetail}
          />
          <Button value='Add hero' styleType='save' type='submit' disabled={buttonDisabled} />
        </form>
        <Button value='Cancel' styleType='link' onClick={cancelAddingHero} />
      </FormLayout>
    </>
  );
};
