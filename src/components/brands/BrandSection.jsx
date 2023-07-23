import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MainContext } from '../../context/MainContextProvider'
import { Autoplay } from 'swiper/modules';

function BrandSection() {
    const { brandArr } = useContext(MainContext);
    return (
        <section className="brands-section" id='brands' data-aos="zoom-in-up">
            <div className="container">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
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
                        }
                    }}
                >
                    {
                        brandArr.map((brand, index) => (
                            <SwiperSlide key={index}>
                                <img src={brand} alt="brand" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default BrandSection
