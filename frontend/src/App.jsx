import { Route, Routes } from 'react-router-dom'

import AddProduct from './pages/AddProduct'
import ProductList from './pages/ProductList'
import AdminLayout from './pages/AdminLayout'
import Home from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Menu from './pages/Menu'

function App() {

  return (
    <div>
      <AdminLayout />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/view' element={<ProductList />} />
        <Route path='/create' element={<AddProduct />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  )
}

export default App
