import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainContext } from '../../context/MainContextProvider';
import { Autoplay, Pagination } from 'swiper/modules';

function HeaderBannerSwiper() {
    const { headerBannerImages } = useContext(MainContext);
    return (
        <div className="banner-wrapper">
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="header-bg-swiper"
            >
                {
                    headerBannerImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img} alt="banner-img" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default HeaderBannerSwiper
