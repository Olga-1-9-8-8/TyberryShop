import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from '../components/MainPageContent/Goods/Good/cartSlice';
import goodsReducer from '../components/MainPageContent/Goods/goodsSlice';
import orderReducer from '../components/Profile/PersonalProfilePage/personalProfileSlice';
import userReducer from './userSlice';

export const rootReducer = combineReducers({
  goods: goodsReducer,
  cart: cartReducer,
  order: orderReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage, // local storege or session storege need to choose
  list: ['cart'], // what we want to save in LS
};

export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>; // extract type of root reducer
