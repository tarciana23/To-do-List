import React from 'react'
import ReactDOM from 'react-dom/client'
import Global from './Styles/global.js'
import theme from './Styles/theme.js'
import { ThemeProvider } from 'styled-components'
import {Principal} from './pages/Principal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Global/>
         <Principal />
    </ThemeProvider>    
  </React.StrictMode>,
)
