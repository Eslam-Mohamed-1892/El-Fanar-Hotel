import React from 'react'
import Home from './pages/user/Home';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Login from './pages/admin/dashboard/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


export default function App() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </main>
  )
}
