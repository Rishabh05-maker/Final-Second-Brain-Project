import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './slice/Store.ts'

createRoot(document.getElementById('root')!).render(
<Provider store={Store}> 
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>

)
