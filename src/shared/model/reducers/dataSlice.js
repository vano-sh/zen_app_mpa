import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_BASE_URL } from '../../config/api'

const fetchData = createAsyncThunk('data/fetchData', async (_, thunkAPI) => {
  const { lang } = thunkAPI.getState().langReducer
  try {
    const response = await fetch(`${API_BASE_URL}${lang}/.json`)

    if (!response.ok) throw new Error('data could not be retrieved')

    const data = await response.json()

    if (!data) throw new Error('no data')

    return thunkAPI.fulfillWithValue(data)
  } catch (error) {
    return thunkAPI.rejectWithValue('Error data...')
  }
})

const initialState = {
  data: null,
  isLoading: true,
  errorMessage: '',
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
        state.errorMessage = ''
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoading = true
        state.errorMessage = action.payload
      })
  },
})

const { reducer: dataReducer } = dataSlice

export { dataReducer, fetchData }
