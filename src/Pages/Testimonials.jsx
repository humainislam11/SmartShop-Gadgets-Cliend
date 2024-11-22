
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( ()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    
    return (
        <div>
            <h3 className="text-center font-semibold text-yellow-500 mt-16">---What Our Clients Say---</h3>
            <hr className="mt-3 w-[240px] lg:ml-[455px]" />
             <h1 className="text-center text-3xl font-bold mt-3">TESTIMONIALS</h1>
             <hr className="w-[240px] lg:ml-[455px] mt-3" />
             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review => <SwiperSlide key={review._id}>
                    
                    <div className='flex flex-col items-center'>
                    <Rating className='text-center mt-5'
                style={{ maxWidth: 120 }}
                value={review.rating}
                readOnly
    />
                        <p className='text-center mt-3'>{review.review_text}</p>
                        <h3 className='text-center text-orange-400 text-xl font-semibold'>{review.reviewer_name}</h3>
                    </div>
            </SwiperSlide>)
        }
      </Swiper>
        </div>
    );
};

export default Testimonials;