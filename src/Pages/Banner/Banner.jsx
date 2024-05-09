
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
const Banner = () => {
     return (
          <div className='container px-5 py-10 mx-auto'>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
               <Slide></Slide>
            </SwiperSlide>
            <SwiperSlide>
               <Slide></Slide>
            </SwiperSlide>
            <SwiperSlide>
               <Slide></Slide>
            </SwiperSlide>
            <SwiperSlide>
               <Slide></Slide>
            </SwiperSlide>
            <SwiperSlide>
               <Slide></Slide>
            </SwiperSlide>
            <SwiperSlide>
               <Slide></Slide>
            </SwiperSlide>
          </Swiper>
        </div>
     );
};

export default Banner;