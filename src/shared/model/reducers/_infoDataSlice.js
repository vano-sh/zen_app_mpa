import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_BASE_URL } from '../../config/api'

const fetchInfoData = createAsyncThunk(
  'data/fetchInfoData',
  async (id, thunkAPI) => {
    const { lang } = thunkAPI.getState().langReducer
    try {
      const response = await fetch(
        `${API_BASE_URL}${lang}/pages/${id}/.json`
      )
      if (!response.ok)
        throw new Error('data could not be retrieved')
      const data = await response.json()
      if (!data) throw new Error('no data')
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      console.error(error)
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const initialState = {
  isLoading: false,
  infoData: null,
  errorMessage: '',
}

const infoDataSlice = createSlice({
  name: 'infoData',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchInfoData.pending]: (state) => {
      state.isLoading = true
    },
    [fetchInfoData.fulfilled]: (state, action) => {
      state.isLoading = false
      state.infoData = action.payload
      state.errorMessage = ''
    },
    [fetchInfoData.rejected]: (state, action) => {
      state.isLoading = false
      state.errorMessage = action.payload
    },
  },
})

const { reducer: infoDataReducer } = infoDataSlice

export { infoDataReducer, fetchInfoData }
