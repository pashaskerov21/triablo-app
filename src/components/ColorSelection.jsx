import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/MainContextProvider'

function ColorSelection({setActiveColor , showThemeColors, toggleThemeColors ,colorItemStatus, setColorItemStatus}) {
    const { themeColors } = useContext(MainContext);
    const [titleColor, setTitleColor] = useState();
    

    useEffect(() => {
        let colorItem = document.querySelectorAll('.color-item');
        let delay = 0;
        for (let i = 0; i < colorItem.length; i++) {
            colorItem[i].style.animationDelay = delay + 's';
            delay = delay + 0.15;
        }
    },[])

    const handleColorItem = (code) => {
        setActiveColor(code);
        setColorItemStatus(false)
        setTimeout(() => {
            toggleThemeColors();
        },1000)
    } 
    return (
        <div className={`select-color ${showThemeColors ? 'active' : ''}`}>
            <h1 className='title' style={{color: `#${titleColor}` }}>choose your color</h1>
            <div className="row">
                {
                    themeColors.map(color => (
                        <div className={`col-12 col-md-6 col-lg-4 ${themeColors.length === 6 ? 'col-xxl-2' : ''}`} key={color.id}>
                            <div className={`color-item ${colorItemStatus ? 'enable' : 'disable'} ${themeColors.length === 6 ? 'mh' : ''}`}  style={{backgroundColor: `#${color.code}`}} onMouseMove={() => setTitleColor(color.code)} onMouseLeave={() => setTitleColor('a8a8a8')} onClick={() => handleColorItem(color.code)} >
                                <span>#{color.code}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ColorSelection
