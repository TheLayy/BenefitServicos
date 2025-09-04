import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importação do CSS do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Caminhos das imagens e legendas
const slides = [
    { 
        image: '/slides/slide_1.jpg', 
        caption: 'Nós analisamos seu processo e buscamos a melhor solução.'
    },
    { 
        image: '/slides/slide_2.png', 
        caption: 'Otimize a rota de transporte de seus colaboradores.'
    },
    { 
        image: '/slides/slide_3.jpg', 
        caption: 'Mantenha seus colaboradores informados sobre as recargas através do WhatsApp'
    },
    { 
        image: '/slides/slide_4.jpg', 
        caption: 'Soluções personalizadas para o bem-estar da sua equipe'
    },
    { 
        image: '/slides/slide_5.jpg', 
        caption: 'Gestão simplificada de benefícios corporativos'
    }
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
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '90%',
                                    objectFit: 'contain'
                                }}
                            />
                            <p style={{ 
                                textAlign: 'center', 
                                marginTop: '0.5rem',
                                fontSize: '1.2rem',
                                fontWeight: '500',
                                letterSpacing: '0.01em',
                                color: '#290c5d',
                            }}>
                                {slide.caption}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SlideShow;
