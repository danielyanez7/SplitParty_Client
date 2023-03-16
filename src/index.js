import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context'
import { MessageProviderWrapper } from './context/message.context'
import { ThemeProviderWrapper } from './context/theme.context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <MessageProviderWrapper>
        <ThemeProviderWrapper>
          <Router>
            <App />
          </Router>
        </ThemeProviderWrapper>
      </MessageProviderWrapper>
    </AuthProviderWrapper>
  </React.StrictMode>
)

