import { IHero } from '../../utils/types';
import { ADD_NEW_HERO, ADD_STORED_HEROES, FILTER_HEROES } from './actions';

export const addNewHero = (payload: IHero) => ({ type: ADD_NEW_HERO, payload });

export const addStoredHeroes = (payload: IHero[]) => ({ type: ADD_STORED_HEROES, payload });

export const filterHeroes = (payload: string) => ({ type: FILTER_HEROES, payload });
