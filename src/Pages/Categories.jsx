import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchCategories = async () => {
     
        const res = await axios.get('categories.json');
        setProducts(res.data);
    
      
        setLoading(false); 
      
    };

    fetchCategories();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="categories-container">
      <h1 className="text-center font-bold text-3xl my-8">Categories</h1>
      {loading ? (
        <p className="loading-text text-center text-lg">Loading products...</p>
      ) : (
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper mb-10 mt-20"
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <img
                className="w-[300px] h-[300px] object-cover rounded-md"
                src={product.image_url}
                alt={product.name || 'Category'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Categories;
