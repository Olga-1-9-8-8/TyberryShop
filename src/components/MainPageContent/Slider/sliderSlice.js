import { createSlice } from '@reduxjs/toolkit';





export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    pictures: [
      {image: "images/slider1.jpg"},
      {image: "images/slider2.jpg"},
      {image: "images/slider3.jpg"}
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