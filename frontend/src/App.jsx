import { Route, Routes } from 'react-router-dom'

import AddProduct from './pages/AddProduct'
import ProductList from './pages/ProductList'
import AdminLayout from './pages/AdminLayout'
import Home from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Menu from './pages/Menu'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/view' element={<ProductList />} />
        <Route path='/create' element={<AddProduct />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
