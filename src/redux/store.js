import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../components/MainPageContent/Goods/Good/cartSlice'
import goodsReducer from '../components/MainPageContent/Goods/goodsSlice'
import sliderReducer from '../components/MainPageContent/Slider/sliderSlice'
import orderReducer from '../components/Profile/PersonalProfilePage/personalProfileSlice'



export default configureStore({
  reducer: {
    slider: sliderReducer,
    goods: goodsReducer,
    cart: cartReducer,
    order: orderReducer,
  }
})