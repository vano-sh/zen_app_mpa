import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: localStorage.getItem('theme') ?? 'light'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme === 'light'
        ? state.theme = 'dark'
        : state.theme = 'light'
      localStorage.setItem('theme', state.theme)
    }
  }
})

export const { toggleTheme } = themeSlice.actions

export const { reducer: themeReducer } = themeSlice