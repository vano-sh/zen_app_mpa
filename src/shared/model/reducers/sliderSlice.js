import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  slides: [],
  slideDescription: ''
}

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    addSlides(state, { payload }) {
      state.slides.push(payload)
    },
    setSlideDescription(state, { payload }) {
      state.slideDescription = payload
    }
  }
})

export const {
  addSlides,
  setSlideDescription
} = sliderSlice.actions

export const { reducer: sliderReducer } = sliderSlice