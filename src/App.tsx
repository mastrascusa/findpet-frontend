import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from './contexts/AuthContext'

import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";

export function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

