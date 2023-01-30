import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_BASE_URL } from 'shared/config/api'

const fetchData = createAsyncThunk(
  'data/fetchData',
  async (_, thunkApi) => {
    const { lang } = thunkApi.getState().langReducer
    try {
      const response = await fetch(
        `${API_BASE_URL}${lang}/.json`
      )
      console.log(response)
      return response.json()
    } catch (error) {
      return thunkApi.rejectWithValue('Error data...')
    }
  }
)

const initialState = {
  data: null,
  isLoading: false,
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true
    },
    [fetchData.fulfilled]: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },
    [fetchData.rejected]: (state) => {
      state.isLoading = true
    },
  },
})

const { reducer: dataReducer } = dataSlice

export { dataReducer, fetchData }