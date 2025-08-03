import '../App.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidFoodMenu } from "react-icons/bi";
import Header from '../components/AdminHeader';
import AdminHeader from '../components/AdminHeader';

const AdminDashboard = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log(products);
  
  return (
    <div>
      <AdminHeader />
      
      <Header toggleSidebar={toggleSidebar} isSideBarOpen={isSideBarOpen} />

      {isSideBarOpen && (
        <nav className='side-bar'>
          <ul>
            <li>
              <Link to={"/view"}>
                <BiSolidFoodMenu /> &nbsp; Product Details
              </Link>
            </li>
            <li><FaCartShopping /> &nbsp; Order Details</li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default AdminDashboard
