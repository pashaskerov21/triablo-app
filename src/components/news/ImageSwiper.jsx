import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules';

function ImageSwiper({ id, images }) {
    return (
        <>
            <button className={`image-prev-button btn-${id}`}><i className="fa-solid fa-chevron-left"></i></button>
            <button className={`image-next-button btn-${id}`}><i className="fa-solid fa-chevron-right"></i></button>
            <Swiper
                className='card-image-swiper'
                navigation={{
                    prevEl: `.image-prev-button.btn-${id}`,
                    nextEl: `.image-next-button.btn-${id}`,
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
            >
                {
                    images.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default ImageSwiper
