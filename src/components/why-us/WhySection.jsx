import React, { useContext } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MainContext } from '../../context/MainContextProvider'

function WhySection() {
    const { whyUsContent, whyUsSwiperImages } = useContext(MainContext);
    return (
        <section className="why-section" id='why triablo'>
            <div className="container">
                <h1 className='mb-5'>WHY PEOPLE CHOOSE TRIABLO?</h1>
                <div className="grid-container">
                    {
                        whyUsContent.map(content => (
                            <div className="text-item" key={content.id} data-aos="zoom-in-up">
                                <div className="content">
                                    <div className="title">
                                        <img src={content.icon} alt="icon" />
                                        <h3>{content.title}</h3>
                                        <img src={content.icon} alt="icon" />
                                    </div>

                                    <div className="text">
                                        <p>
                                            {content.text}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                    <Swiper
                        className='why-swiper'
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        slidesPerView={1}
                        modules={[Autoplay]}
                    >
                        {
                            whyUsSwiperImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt="bg" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default WhySection
