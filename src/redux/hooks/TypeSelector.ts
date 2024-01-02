import { rootReducer } from '../reducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { store } from '../store';


export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector