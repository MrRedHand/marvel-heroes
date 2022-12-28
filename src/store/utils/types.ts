import { store } from '../store';
import { ThunkAction } from 'redux-thunk';
import { TMainActions } from '../actions/actions-types';

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export type TAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  typeof store.dispatch,
  TMainActions
>;
