import { IHero } from '../../utils/types';
import { ADD_NEW_HERO } from './actions';

export const addNewHero = (payload: IHero) => ({ type: ADD_NEW_HERO, payload });
