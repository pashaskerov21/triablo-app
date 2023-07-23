import React, { useState } from 'react'
import ProductSwiper from './ProductSwiper'
import { useSelector } from 'react-redux';
import BasketOffcanvas from './BasketOffcanvas';

function ProductSection() {
    const basketProducts = useSelector(state => state.productState.basketProducts);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className="products-section" id='products'>
            <BasketOffcanvas show={show} handleClose={handleClose}/>
            <div className="container" data-aos="fade-up">
                <h1>WE MAKE YOU AWESOME</h1>
                <div className="row">
                    <div className="col-12">
                        <div className="products-navbar">
                            <div className="left">
                                <button className="basket-button" onClick={handleShow}>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span>{basketProducts.length}</span>
                                </button>
                            </div>
                            <div className="right">
                                <button className="products-prev-button"><i className="fa-solid fa-chevron-left"></i></button>
                                <button className="products-next-button"><i className="fa-solid fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <ProductSwiper/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductSection
