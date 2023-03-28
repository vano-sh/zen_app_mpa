import { chatbotReducer } from './reducers/chatbotSlice'
import { dataReducer } from './reducers/dataSlice'
import { orderReducer } from './reducers/orderSlice'
import { previewReducer } from './reducers/previewSlice'
import { sliderReducer } from './reducers/sliderSlice'
import { themeReducer } from './reducers/themeSlice'
import { langReducer } from './reducers/langSlice'

import { useAnimateDescription } from './hooks/useAnimateDescription'
import { useAnimateRef } from './hooks/useAnimateRef'
import { useBodyHidden } from './hooks/useBodyHidden'
import { useChatbot } from './hooks/useChatbot'
import { useData } from './hooks/useData'
import { useFetch } from './hooks/useFetch'
import { useForm } from './hooks/useForm'
import { useLang } from './hooks/useLang'
import { usePreview } from './hooks/usePreview'
import { useProgressBar } from './hooks/useProgressBar'
import { useSlider } from './hooks/useSlider'
import { useTheme } from './hooks/useTheme'

export {
  chatbotReducer,
  dataReducer,
  orderReducer,
  previewReducer,
  sliderReducer,
  themeReducer,
  langReducer,
  useAnimateDescription,
  useAnimateRef,
  useBodyHidden,
  useChatbot,
  useData,
  useFetch,
  useForm,
  useLang,
  usePreview,
  useProgressBar,
  useSlider,
  useTheme,
}
