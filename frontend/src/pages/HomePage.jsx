import React, { useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../Customer.css'
import ProductCard from '../components/ProductCard'
import { useProductStore } from '../store/product'

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
        <Header />
        <div className='hero-section'>
            <h1>Come Experience The Best Cuisines</h1>
        </div>

        <h1 className="heading-home">About Us</h1>

        <div className='about-content-container'>
          <div className='about-img-container'>
            <img src='https://images.unsplash.com/photo-1596350351228-e47e93fdb992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk4fHxtYWNhcm9uc3xlbnwwfHwwfHx8MA%3D%3D' alt='Macarons with Coffee'/>
            <img src='https://images.unsplash.com/photo-1664139694630-c9eaccd84765?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='A Cup of Coffee'/>
          </div>
          
          <div className='about-text-container'>
            <p>
              We aim to provide a glimpse into a wide variety of deliciously baked French pastries 
              and other baked goods and also captivate the senses and transport patrons to the charming streets 
              of Paris. 
            </p>
            <p>
              We also have a well experienced team that is looking forward to starting their work and will be 
              using unique techniques and premium ingredients to create an array of delightful offerings that 
              reflects the authenticity of French Cuisine. 
            </p>
            <h3>Our Vision</h3>
            <p>
              Our vision is to become a well-known place that preserves the artistry and tradition of French 
              baking while introducing a fresh and enchanting experience to our customers.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission is to craft and serve the finest-quality French bakery products, creating a warm and 
              welcoming atmosphere that transports customers to the streets of Paris.
              <br/>
              We also know that success depends on the satisfaction of our customers and the wellbeing of our 
              employees. Therefore, we intend to diversify our products depending on their reviews.
            </p>
          </div>
        </div>

        <hr/>

        <h1 className="heading-home">Best Sellers</h1>

        <div className = "product-list-container">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <hr/>

        <h1 className="heading-home">Contact Us</h1>

        <Footer />
    </div>
  )
}

export default HomePage