import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgDetailsMore } from "react-icons/cg";

const AdminHeader = ({ toggleSidebar }) => {
    return (
        <div>
        <nav>
            <div className='logo-div'>
                <button onClick={toggleSidebar}>
                    <CgDetailsMore />
                </button>
                <h1>Delights</h1>
            </div>

            <Link to={"/create"}>
                <button className='add-product-btn'>
                    Add Product
                </button>
            </Link>
        </nav>
        </div>
    );
}

export default AdminHeader
