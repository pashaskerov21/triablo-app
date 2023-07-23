import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../context/MainContextProvider';
import { Link } from 'react-scroll';

function NavLinks({ showMenu, setShowMenu }) {
    const { navLinksArr } = useContext(MainContext);
    useEffect(() => {
        let navLinks = document.querySelectorAll('.nav-links a');
        let delay = 0;
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.animationDelay = delay + 's';
            delay = delay + 0.15;
        }
    }, [])
    return (
        <>
            <div className={showMenu ? 'black-backdrop' : 'black-backdrop d-none'} onClick={() => setShowMenu(false)}></div>
            <div className={showMenu ? 'nav-links active' : 'nav-links'}>
                <div className="menu-header d-lg-none">
                    <button className="close-button" onClick={() => setShowMenu(false)}><i className="fa-solid fa-xmark"></i></button>
                </div>
                {
                    navLinksArr.map((link, index) => (
                        <Link onClick={() => setShowMenu(false)} className={showMenu ? 'link-animation' : ''} activeClass='active' spy={true} key={index} to={link} offset={-70}>{link}</Link>
                    ))
                }
            </div>
        </>
    )
}

export default NavLinks
