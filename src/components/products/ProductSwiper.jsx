import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MainContext } from '../../context/MainContextProvider';
import ProductCard from './ProductCard';

function ProductSwiper({handleShow}) {
    const { productArr } = useContext(MainContext);
    return (
        <Swiper
            navigation={{
                prevEl: '.products-prev-button',
                nextEl: '.products-next-button',
            }}
            modules={[Navigation]}
            slidesPerView={1}
            breakpoints={{
                576: { 
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                992: { 
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200: { 
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
        >
            {
                productArr.map(product => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default ProductSwiper
