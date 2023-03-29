import {  Route, Routes } from 'react-router-dom'
import {
  Header,
  ProgressBar,
  Footer,
  Modal,
  ModalSlider,
  Chatbot,
} from 'widgets'
import { HomePage } from './HomePage'
import { InfoPage } from './InfoPage'
import { CashbackPage } from './CashbackPage'
import { ClientsPage } from './ClientsPage'

export const LayoutPage = () => {
  return (
    <>
      <Header />
      <ProgressBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path=':id' element={<InfoPage />} />
        <Route path='cashback' element={<CashbackPage />} />
        <Route path='clients' element={<ClientsPage />} />
      </Routes>
      <Footer />
      <Modal />
      <ModalSlider />
      <Chatbot />
    </>
  )
}

/*
<Routes>
      <Route path='/' element={<HomePage />} />
      <Route path=':id' element={<InfoPage />} />
      <Route path='cashback' element={<CashbackPage />} />
      <Route path='clients' element={<ClientsPage />} />
    </Routes>
*/
