import { RequireAuth } from 'react-auth-kit'
import { Routes, Route } from 'react-router-dom'
import { Heropage } from './pages/Heropage'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Heropage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<RequireAuth loginPath='/login'><Home /></RequireAuth>} />
    </Routes>
  )
}