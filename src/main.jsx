import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
// const apiUrl = import.meta.env.VITE_API_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
