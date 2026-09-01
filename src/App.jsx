import React, { useState } from 'react'
import Home from './pages/user/Home';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Login from './pages/admin/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import '@fontsource/aref-ruqaa'
import '@fontsource/aref-ruqaa/700.css'


export default function App() {

  const [language, setLanguage] = useState('en')
  const [theme, setTheme] = useState('light')

  return (
    <main
      className={language === 'ar' ? 'aref-font' : ''}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                language={language}
                theme={theme}
                setLanguage={setLanguage}
                setTheme={setTheme}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </main>
  )
}
