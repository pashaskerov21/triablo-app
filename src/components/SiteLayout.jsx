import React, { useState } from 'react'
import AboutUsSection from "./about-us/AboutUsSection";
import BrandSection from "./brands/BrandSection";
import ContactSection from "./contact/ContactSection";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import NewsSection from "./news/NewsSection";
import ProductSection from "./products/ProductSection";
import ReviewSection from "./review/ReviewSection";
import TeamSection from "./team/TeamSection";
import WhySection from "./why-us/WhySection";

function SiteLayout() {
    const [showScrollBtn, setShowScrollBtn] = useState(false);
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            setShowScrollBtn(true)
        } else {
            setShowScrollBtn(false)
        }
    })
    const handleScrollBtn = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <button onClick={handleScrollBtn} className={`page-scroll-button ${showScrollBtn ? '' : 'd-none'}`}><i className="fa-solid fa-arrow-up"></i></button>
            <Header />
            <main>
                <ProductSection />
                <BrandSection />
                <WhySection />
                <TeamSection />
                <ReviewSection />
                <AboutUsSection />
                <NewsSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}

export default SiteLayout
