import React, { useContext, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MainContext } from '../../context/MainContextProvider'
import { Autoplay } from 'swiper/modules'

function TeamSection() {
    const { teamArr } = useContext(MainContext);
    useEffect(() => {
        let sosialIcon = document.querySelectorAll('.team-card .sosial-icons');

        for (let i = 0; i < sosialIcon.length; i++) {
            (function (index) {
                let sosialLink = sosialIcon[index].querySelectorAll('a');
                let delay = 0;
                for (let k = 0; k < sosialLink.length; k++) {
                    sosialLink[k].style.animationDelay = delay + 's';
                    delay = delay + 0.15;
                }
            })(i);
        }
    }, [])
    return (
        <section className="team-section" id='team'>
            <div className="container" data-aos="fade-up">
                <h1>OUR TEAM</h1>
                <div className="description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Tempora esse, inventore incidunt consequatur magni animi
                        autem veniam neque laudantium quod, nihil illo unde nemo
                        odio sint, itaque quidem ea suscipit.
                    </p>
                </div>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                >
                    {
                        teamArr.map(user => (
                            <SwiperSlide key={user.id}>
                                <div className="team-card" data-aos="zoom-in-up">
                                    <img src={user.image} alt="team" />
                                    <div className="bottom">
                                        <div className="info">
                                            <span className="name">{user.name}</span>
                                            <span className="position">{user.position}</span>
                                        </div>
                                        <div className="sosial-icons">
                                            <a href={user.facebook}><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href={user.twitter}><i className="fa-brands fa-twitter"></i></a>
                                            <a href={user.instagram}><i className="fa-brands fa-instagram"></i></a>
                                            <a href={user.linkedin}><i className="fa-brands fa-linkedin-in"></i></a>
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

export default TeamSection
