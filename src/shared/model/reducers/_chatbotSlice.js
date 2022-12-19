import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isChatOpen: false,
  faq: null,
  messages: [],
  isBotWriting: false
}

const chatbotSlice = createSlice({
  name: 'chatbot',
  initialState,
  reducers: {
    toggleChatOpen: (state, { payload }) => {
      state.isChatOpen = payload
    },
    setFaq: (state, { payload }) => {
      state.faq = payload
    },
    addMessages: (state, { payload }) => {
      state.messages.push(payload)
    },
    toggleIsBotWriting: (state, { payload }) => {
      state.isBotWriting = payload
    }
  }
})

export const {
  toggleChatOpen,
  setFaq,
  addMessages,
  toggleIsBotWriting
} = chatbotSlice.actions

export const { reducer: chatbotReducer } = chatbotSlice