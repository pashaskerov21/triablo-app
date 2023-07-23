import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../context/MainContextProvider';
import ImageSwiper from './ImageSwiper';

function ImageBlock({contentID}) {
    const [images, setImages] = useState([]);
    const { newsCardImages } = useContext(MainContext);

    useEffect(() => {
        let filteredImages = newsCardImages.filter((image) => image.contentID === contentID)
        setImages([...filteredImages]);
    }, [contentID, newsCardImages])

  return (
    <div className='image'>
      {
        images.length > 1 ? (
            <ImageSwiper id={contentID} images={images}/>
        ) : (
            <div className="single-img">
                <img src={images[0]?.image} alt="" />
                <button><i className="fa-solid fa-plus"></i></button>
            </div>
        )
      }
    </div>
  )
}

export default ImageBlock
