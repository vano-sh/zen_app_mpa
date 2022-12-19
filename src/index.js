import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'app/store'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'app'
import 'app/styles/index.scss'

const $root = document.querySelector('#root')
const root = createRoot($root)

root.render(
  <Provider store={store()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)