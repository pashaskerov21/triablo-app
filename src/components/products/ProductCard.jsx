import React, { useState } from 'react'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useDispatch, useSelector } from 'react-redux';
import { addProductToBasket } from '../../redux/BasketAction';
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

function ProductCard({ product }) {


    let [amount, setAmount] = useState(0);
    const dispatch = useDispatch();
    const basketProducts = useSelector(state => state.productState.basketProducts);
    let basketProduct = basketProducts.find((p) => p.id === product.id);
    const handleBasketButton = () => {
    
        setAmount(amount+=1);
        if(basketProduct){
            basketProduct.basketAmount = amount;
        }else{
            let addProduct = {...product, basketAmount: amount, basketPrice: product.price - product.discount}
            dispatch(addProductToBasket(addProduct));
        }

        let basketButtons = document.querySelectorAll('.add-basket-button');
        for (let i = 0; i < basketButtons.length; i++) {
            (function (index) {
                let numbSpan = document.createElement('span');
                numbSpan.setAttribute('class', 'numb');
                numbSpan.innerHTML = '+1';
                basketButtons[index].appendChild(numbSpan);
                setTimeout(() => {
                    numbSpan.remove();
                }, 1000)
            })(i);
        }
    }

    return (
        <div className="product-card" data-aos="zoom-in-up">
            <div className="image">
                <img src={product.image} alt="product" />
                <div className="icons">
                    <button className="detail-offcanvas-button">
                        <a href={product.image} data-fancybox="">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </button>
                    <button className="add-basket-button" onClick={() => handleBasketButton()} data-bs-toggle='offcanvas' data-bs-target='#basket-offcanvas'>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>

            </div>
            <div className="details">
                <div className="price">
                    {
                        product.discount === 0 ? (
                            <span>${product.price.toFixed(2)}</span>
                        ) : (
                            <>
                                <span className='old-price'>${product.price.toFixed(2)}</span>
                                <span className='new-price'>${(product.price - product.discount).toFixed(2)}</span>
                            </>
                        )
                    }
                </div>
                <div className="info">
                    <span className="name">{product.name}</span>
                    <span className="category">{product.category}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
