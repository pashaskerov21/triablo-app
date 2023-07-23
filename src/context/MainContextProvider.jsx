import React, { createContext } from 'react'
import { headerBannerImages, navLinksArr } from './data/HeaderData';
import { productArr } from './data/Products';
import { brandArr } from './data/Brands';
import { teamArr } from './data/TeamData';
import { counterArr } from './data/CounterData';
import { whyUsSwiperImages, whyUsContent } from './data/WhyUsData';
import {reviewArr} from './data/Reviews';
import { newsCardImages, newsContentArr } from './data/NewsData';
import { themeColors } from './data/ThemeColors';

export const MainContext = createContext();

function MainContextProvider({children}) {
  return (
    <MainContext.Provider value={{themeColors, navLinksArr, headerBannerImages, productArr, brandArr,whyUsSwiperImages,whyUsContent, teamArr,reviewArr, counterArr, newsCardImages,newsContentArr }}>
        {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider
