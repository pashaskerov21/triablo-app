import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromBasket } from '../../redux/BasketAction';

function BasketOffcanvas({ show, handleClose }) {
    const basketProducts = useSelector(state => state.productState.basketProducts);
    const dispatch = useDispatch();
    const handleDeleteButton = (id) => {
        dispatch(removeProductFromBasket(id))
    }
    const [basketTotal, setBasketTotal] = useState(0);

    const basketProductsData = basketProducts.map((product) => ({
        basketPrice: product.basketPrice,
        basketAmount: product.basketAmount
    }));


    useEffect(() => {
        let total = basketProducts.reduce((total, product) => total + product.basketPrice * product.basketAmount, 0);
        setBasketTotal(total);
    }, [basketProducts, basketProductsData])

    return (
        <>
            <div className={show ? 'black-backdrop' : 'black-backdrop d-none'} onClick={handleClose}></div>
            <div className={`basket-offcanvas ${show ? 'active' : ''}`}>
                <div className="header">
                    <span>Products</span>
                    <button className="close-button" onClick={handleClose}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="body">
                    <form action="#" className="basket-form">
                        <input type="text" className="form-control" placeholder="Name" />
                        <input type="email" className="form-control" placeholder="Email" />
                        <input type="text" className="form-control" placeholder="Phone Number" />
                        <button className="submit-button" type="submit">Send</button>
                    </form>
                    <div className="basket-product-table">
                        <div className="basket-result">
                            <span className="label">Total:</span>
                            <span className="total-price">${basketTotal.toFixed(2)}</span>
                        </div>
                        {basketProducts.length === 0 && <span className="empty-text">It`s empty here</span>}
                        <div className="products-wrapper">
                            {
                                basketProducts.length > 0 ? (
                                    basketProducts.map(product => (
                                        <div className="product" key={product.id}>
                                            <div className="left">
                                                <div className="image">
                                                    <img src={product.image} alt="product" />
                                                </div>
                                                <div className="info">
                                                    <span className="name">{product.name}</span>
                                                    <span className="category">{product.category}</span>
                                                    <div className='d-flex'>
                                                        <span className="price">${product.basketPrice.toFixed(2)}</span>
                                                        <span className='mx-2'>-</span>
                                                        <span className="amount">{product.basketAmount}x</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="product-delete-button" onClick={() => handleDeleteButton(product.id)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </div>
                                    ))
                                ) : null
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BasketOffcanvas
