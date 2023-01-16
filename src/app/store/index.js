import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit'
import {
  dataReducer,
  chatbotReducer,
  infoDataReducer,
  orderReducer,
  previewReducer,
  sliderReducer,
  themeReducer,
  langReducer,
} from 'shared/model'

const rootReducer = combineReducers({
  dataReducer,
  infoDataReducer,
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
