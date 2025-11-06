import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Reactmemo from './components/Reactmemo.jsx'
import Callback from './components/callback.jsx'
import Memo from './components/memo.jsx'
import {ThemeContextProvider} from './.contexts/UseTheme.jsx'
import Theme from './components/Theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
    {/* <Reactmemo /> */}
    {/* <Callback/> */}
    {/* <Memo/> */}
    <Theme/>
    </ThemeContextProvider>
  </StrictMode>,
)
