import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Account } from './pages/Account'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='account' element={<Account />}/>
    </Routes>
  )
}
