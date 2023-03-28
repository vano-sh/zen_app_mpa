import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalActive: false,
  isSuccessSubmit: false,
  isFormReset: false
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    toggleWindowModal: (state, { payload }) => {
      state.isModalActive = payload
    },
    changeSuccessSubmit: (state, { payload }) => {
      state.isSuccessSubmit = payload
    },
    changeFormReset: (state, { payload }) => {
      state.isFormReset = payload
    }
  }
})

export const {
  toggleWindowModal,
  changeSuccessSubmit,
  changeFormReset
} = formSlice.actions

export const { reducer: orderReducer } = formSlice