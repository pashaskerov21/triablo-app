import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContextProvider'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ImageBlock from './ImageBlock';

function NewsSection() {
    const { newsContentArr } = useContext(MainContext);
    return (
        <section className="news-section" id='news'>
            <div className="container" data-aos="fade-up">
                <h1>THINK ABOUT IT</h1>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                    ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit.
                </div>
                <Swiper
                    className='think-about-swiper'
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    breakpoints={{
                        992: { slidesPerView: 2 },
                        1400: { slidesPerView: 3 },
                    }}
                >
                    {
                        newsContentArr.map(content => (
                            <SwiperSlide key={content.id}>
                                <div className="think-about-card" data-aos="zoom-in-up">
                                    <ImageBlock contentID={content.id}/>
                                    <div className="content">
                                        <span className="date">{content.date}</span>
                                        <div className="title">
                                            <p>{content.title}</p>
                                        </div>
                                        <div className="text">
                                            <p>
                                                {content.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default NewsSection
