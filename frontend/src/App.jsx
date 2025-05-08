import { Route, Routes } from 'react-router-dom'

import AddProduct from './pages/AddProduct'
import ProductList from './pages/ProductList'
import AdminLayout from './pages/AdminLayout'
import Home from './pages/HomePage'

function App() {

  return (
    <div>
      <AdminLayout />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/view' element={<ProductList />} />
        <Route path='/create' element={<AddProduct />} />
      </Routes>
    </div>
  )
}

export default App
