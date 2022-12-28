import { ADD_NEW_HERO, ADD_STORED_HEROES, FILTER_HEROES } from '../../actions/actions';
import { TMainActions } from '../../actions/actions-types';
import { IHero } from '../../../utils/types';
import { initialHeroes } from '../../mock/initialHeroes';

export type TMainStoreState = {
  allHeroes: IHero[];
  filteredHeroes: IHero[];
  appIsLoading: boolean;
};

export const initialState: TMainStoreState = {
  allHeroes: initialHeroes,
  filteredHeroes: [],
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
        allHeroes: [...state.allHeroes, action.payload]
      };
    case ADD_STORED_HEROES:
      return {
        ...state,
        allHeroes: [...action.payload]
      };
    case FILTER_HEROES:
      return {
        ...state,
        filteredHeroes: state.allHeroes.filter(hero =>
          hero.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    default: {
      return state;
    }
  }
};
