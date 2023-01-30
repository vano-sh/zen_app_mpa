import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_BASE_URL } from '../../config/api'

const fetchData = createAsyncThunk(
  'data/fetchData',
  async (address = '', thunkAPI) => {
    const { lang } = thunkAPI.getState().langReducer
    try {
      const response = await fetch(
        `${API_BASE_URL}${lang}/${address}/.json`
      )
      if (!response.ok)
        throw new Error('data could not be retrieved')
      const data = await response.json()
      if (!data) throw new Error('no data')
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue('Error data...')
    }
  }
)

const initialState = {
  data: null,
  isLoading: false,
  errorMessage: '',
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
      state.errorMessage = ''
    },
    [fetchData.rejected]: (state) => {
      state.isLoading = true
      state.errorMessage = action.payload
    },
  },
})

const { reducer: dataReducer } = dataSlice

export { dataReducer, fetchData }
