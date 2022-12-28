import { ADD_NEW_HERO, ADD_STORED_HEROES, FILTER_HEROES } from './actions';
import { IHero } from '../../utils/types';

export interface IAddNewHero {
  readonly type: typeof ADD_NEW_HERO;
  payload: IHero;
}

export interface IAddStoredHeroes {
  readonly type: typeof ADD_STORED_HEROES;
  payload: IHero[];
}

export interface IFilterHeroes {
  readonly type: typeof FILTER_HEROES;
  payload: string;
}

export type TMainActions = IAddNewHero | IAddStoredHeroes | IFilterHeroes;
