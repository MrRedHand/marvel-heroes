import { MainTitle } from '../../components/UI/MainTitle/MainTitle';
import { FormLayout } from '../../components/Layout/FormLayout/FormLayout';
import { InputField } from '../../components/UI/InputField/InputField';
import { TextArea } from '../../components/UI/TextArea/TextArea';
import React, { useState } from 'react';
import { Button } from '../../components/UI/Button/Button';

export const AddHeroPage = () => {
  const [heroName, setHeroName] = useState<string>('');
  const [heroImgUrl, setHeroImgUrl] = useState<string>('');
  const [heroIntro, setHeroIntro] = useState<string>('');
  const [heroDetail, setHeroDetail] = useState<string>('');

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

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      heroName,
      heroImgUrl,
      heroIntro,
      heroDetail
    });
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
          <Button value='Add hero' styleType='save' type='submit' />
        </form>
      </FormLayout>
    </>
  );
};
