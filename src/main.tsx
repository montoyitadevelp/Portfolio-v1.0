
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../src/data/theme.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>

  
)
