import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from './rootReducer';
import type { AppDispatch } from './store';

// Use instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
