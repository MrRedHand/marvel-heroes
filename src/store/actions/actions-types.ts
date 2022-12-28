import { ADD_NEW_HERO, ADD_STORED_HEROES } from './actions';
import { IHero } from '../../utils/types';

export interface IAddNewHero {
  readonly type: typeof ADD_NEW_HERO;
  hero: IHero;
}

export interface IAddStoredHeroes {
  readonly type: typeof ADD_STORED_HEROES;
  heroes: IHero[];
}

export type TMainActions = IAddNewHero | IAddStoredHeroes;
