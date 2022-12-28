import { ADD_NEW_HERO, ADD_STORED_HEROES } from '../../actions/actions';
import { TMainActions } from '../../actions/actions-types';
import { IHero } from '../../../utils/types';
import { initialHeroes } from '../../mock/initialHeroes';

export type TMainStoreState = {
  allHeroes: IHero[];
  appIsLoading: boolean;
};

export const initialState: TMainStoreState = {
  allHeroes: initialHeroes,
  appIsLoading: false
};

export const mainReducer = (
  state: TMainStoreState = initialState,
  action: TMainActions
): TMainStoreState => {
  switch (action.type) {
    case ADD_NEW_HERO:
      return {
        ...state,
        allHeroes: [...state.allHeroes, action.hero]
      };
    case ADD_STORED_HEROES:
      return {
        ...state,
        allHeroes: [...state.allHeroes, ...action.heroes]
      };
    default: {
      return state;
    }
  }
};
