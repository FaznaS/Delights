import { useLocation } from 'react-router-dom'
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/counter/cartSlice';

const ViewProduct = () => {
  const { state } = useLocation();
  const product = state?.product;

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className='page-container'>
        <Header />
        <div className='content'>
          <div className='view-product-card'>
              {/* Left Side */}
              <div style={{ width: '50%' }}>
                <img src={product.image} alt={product.name} style={{ height: '300px', width: '400px', border: '1px solid black', margin: '10px' }} />
              </div>
              {/* Right Side */}
              <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', margin: '10px', textAlign: 'left', height: '300px' }}>
                <h3>{product.name}</h3>
                <p style={{ lineHeight: '1.5em', height: '70px'}}>{product.description}</p>
                <p style={{ fontWeight: 600}}>Rs. {product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)} 
                  style={{ backgroundColor: '#404040', height: '40px', padding: '8px 18px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '120px', fontWeight: 'bold', marginTop: '10px'}}>Add to Cart</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default ViewProduct
