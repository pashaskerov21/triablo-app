import React, { useContext } from 'react'
import review_bg from '../../asset/image/review/reviews-bg.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { MainContext } from '../../context/MainContextProvider'

function ReviewSection() {
    const { reviewArr } = useContext(MainContext);
    return (
        <section className="review-section" id='reviews' style={{ backgroundImage: `url('${review_bg}')` }}>
            <div className="container" data-aos="zoom-in-up">
                <Swiper
                    className='review-swiper'
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                >
                    {
                        reviewArr.map(user => (
                            <SwiperSlide key={user.id}>
                                <div className="review-card">
                                    <div className="title">
                                        <img src={user.image} alt="auth" />
                                        <span className="name">{user.name}</span>
                                    </div>
                                    <div className="comment">
                                        <p>
                                            {user.text}
                                        </p>
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

export default ReviewSection
