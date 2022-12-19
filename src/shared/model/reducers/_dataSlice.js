import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_BASE_URL } from 'shared/config/api'

const fetchData = createAsyncThunk(
  'data/fetchData',
  async (_, thunkApi) => {
    const { lang } = thunkApi.getState().langReducer
    try {
      const response = await fetch(
        `${API_BASE_URL}/${lang}/.json`
      )
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
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      }),
      builder.addCase(fetchData.rejected, (state) => {
        state.isLoading = true
      })
  },
})

const { reducer: dataReducer } = dataSlice

export { dataReducer, fetchData }

/*
{
    [fetchData.pending]: (state) => {
      state.isLoading = true
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.data = payload
    },
    [fetchData.rejected]: (state) => {
      state.isLoading = true
    }
  }
*/
