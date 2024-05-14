
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
               <Slide image={"https://i.ibb.co/n7kQx9S/vita-vilcina-Kt-Oid0-FLjq-U-unsplash.jpg"}></Slide>
            </SwiperSlide>
            <SwiperSlide>
               <Slide image={"https://i.ibb.co/Nnt00fb/humphrey-muleba-dyj7-RTs85-Fs-unsplash.jpg"}></Slide>
            </SwiperSlide>
            <SwiperSlide>
               <Slide image={"https://i.ibb.co/QM5QqKg/katarzyna-urbanek-4q-Qsm-E4-Vd-A-unsplash.jpg"}></Slide>
            </SwiperSlide>
            <SwiperSlide>
               <Slide image={"https://i.ibb.co/2kYFXyc/rakabtw-M3-Yu-HIpgm-SY-unsplash.jpg"}></Slide>
            </SwiperSlide>
            <SwiperSlide>
               <Slide image={"https://i.ibb.co/TwDhg4m/roberto-nickson-MA82m-PIZe-GI-unsplash.jpg"}></Slide>
            </SwiperSlide>
            <SwiperSlide>
               <Slide image={"https://i.ibb.co/gSZvfvK/sasha-kaunas-G6e-XUCi8-Jg-A-unsplash.jpg"}></Slide>
            </SwiperSlide>
          </Swiper>
        </div>
     );
};

export default Banner;