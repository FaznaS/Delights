import React, { useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../Customer.css'
import ProductCard from '../components/ProductCard'
import { useProductStore } from '../store/product'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

        <h1 className="heading-home">Best Sellers</h1>

        <div className = "product-list-container">
          <div className="swiper-button image-swiper-button-next">
            <IoIosArrowForward />
          </div>
          <div className="swiper-button image-swiper-button-prev">
            <IoIosArrowBack />
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled"
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide>
                <ProductCard key={product._id} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Footer />
    </div>
  )
}

export default HomePage