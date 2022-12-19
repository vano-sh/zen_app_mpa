import { useSelector } from "react-redux"
import {
  toggleChatOpen,
  setFaq,
  addMessages,
  toggleIsBotWriting
} from 'shared/model/reducers/_chatbotSlice'

export const useChatbot = () => {
  const {
    isChatOpen,
    faq,
    messages,
    isBotWriting
  } = useSelector((state) => state.chatbotReducer)

  return {
    isChatOpen, toggleChatOpen,
    faq, setFaq,
    messages, addMessages,
    isBotWriting, toggleIsBotWriting
  }
}