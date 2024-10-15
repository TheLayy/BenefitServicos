import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importação do CSS do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Caminhos das imagens
const images = [
    '/slides/slide_1.jpg',
    '/slides/slide_2.jpg',
    '/slides/slide_3.jpg',
    '/slides/slide_4.jpg',
    '/slides/slide_5.jpg',
    '/slides/slide_6.jpg',
    '/slides/slide_7.jpg',
    '/slides/slide_8.jpg',
    '/slides/slide_9.jpg',
];

const SlideShow = () => {
    return (
        <div style={{ width: '100%', maxWidth: '90%', margin: '3rem auto' }}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true
                }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                style={{ height: '70vh' }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SlideShow;
