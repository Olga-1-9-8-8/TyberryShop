import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cartReducer from '../components/MainPageContent/Goods/Good/cartSlice';
import goodsReducer from '../components/MainPageContent/Goods/goodsSlice';
import sliderReducer from '../components/MainPageContent/Slider/sliderSlice';
import orderReducer from '../components/Profile/PersonalProfilePage/personalProfileSlice';
import userReducer from './userSlice';



export default configureStore({
  reducer: {
    slider: sliderReducer,
    goods: goodsReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})