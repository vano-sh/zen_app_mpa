import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit'
import {
  dataReducer,
  chatbotReducer,
  orderReducer,
  previewReducer,
  sliderReducer,
  themeReducer,
  langReducer,
} from 'shared/model'

const rootReducer = combineReducers({
  dataReducer,
  themeReducer,
  langReducer,
  previewReducer,
  orderReducer,
  sliderReducer,
  chatbotReducer,
})

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
  })

  return store
}
