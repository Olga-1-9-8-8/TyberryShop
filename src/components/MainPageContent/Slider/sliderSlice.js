import { createSlice } from '@reduxjs/toolkit';
import img1 from '../../../pictures/slider1.jpg';
import img2 from '../../../pictures/slider2.jpg';
import img3 from '../../../pictures/slider3.jpg';




export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    pictures: [
    img1,img2,img3,
    ]

  },
  reducers: {
    
    previosSlide: state => {
      state.pictures += 1
    },
    nextSlide: state => {
      state.pictures -= 1
    },
  }
})


export const { previosSlide, nextSlide} = sliderSlice.actions
export const arrSlider = state => state.slider.pictures;

export default sliderSlice.reducer