import React, { useState } from 'react'

function ContactSection() {
    const [showMap, setShopMap] = useState(false);
    const openMap = () => setShopMap(true);
    const closeMap = () => setShopMap(false)
    return (
        <>
            <div className={`contact-map-offcanvas ${showMap ? 'active ' : ''}`}>
                <button className="map-close-button" onClick={closeMap}>Back to Site</button>
                <div className="map">
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24305.76232914585!2d49.86419514999999!3d40.4039704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4ee9253a65%3A0x29160f1a81905e71!2zTtOZcmltYW4gTtOZcmltYW5vdg!5e0!3m2!1saz!2saz!4v1678687906181!5m2!1saz!2saz" ></iframe>
                </div>
            </div>
            <section className="contact-section" id='contact'>
                <div className="container" data-aos="fade-up">
                    <h1>CONTACT OR FIND US ON <button onClick={openMap}>THE MAP</button></h1>

                    <form action="#" className="contact-form">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="form-row">
                                    <label htmlFor="name-input">Name</label>
                                    <input type="text" className="form-control" id="name-input" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="name-email">Email</label>
                                    <input type="email" className="form-control" id="name-email" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="name-subject">Subject</label>
                                    <input type="text" className="form-control" id="name-subject" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="form-row message">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message"></textarea>
                                    <button type="submit" className="send-button"><span>Send</span><i className="fa-solid fa-envelope"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="sosial-icons">
                        <button><i className="fa-brands fa-facebook-f"></i></button>
                        <button><i className="fa-brands fa-twitter"></i></button>
                        <button><i className="fa-brands fa-instagram"></i></button>
                        <button><i className="fa-brands fa-youtube"></i></button>
                        <button><i className="fa-brands fa-linkedin-in"></i></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection
