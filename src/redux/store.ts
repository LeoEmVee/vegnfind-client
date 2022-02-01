import { createStore } from 'redux';
import reducers from './reducers/index';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const store = createStore(reducers);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

