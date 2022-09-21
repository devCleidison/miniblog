import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { SignIn } from './pages/SignIn'
import { Dashboard } from './pages/Dashboard'
import { CreatePost } from './pages/CreatePost'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='sign-in' element={<SignIn />}/>
      <Route path='dashboard' element={<Dashboard />}/>
      <Route path='posts/create' element={<CreatePost />}/>
    </Routes>
  )
}
