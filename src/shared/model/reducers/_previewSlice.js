import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  previewDetails: null
}

const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    setPreviewDetails(state, { payload }) {
      state.previewDetails = payload
    },
  }
})

export const { setPreviewDetails } = previewSlice.actions

export const { reducer: previewReducer } = previewSlice