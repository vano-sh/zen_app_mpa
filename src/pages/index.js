import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { InfoPage } from './InfoPage'
import { CashbackPage } from './CashbackPage'
import { ClientsPage } from './ClientsPage'

export const LayoutPage = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path=':id' element={<InfoPage />} />
      <Route path='cashback' element={<CashbackPage />} />
      <Route path='clients' element={<ClientsPage />} />
    </Routes>
  )
}
