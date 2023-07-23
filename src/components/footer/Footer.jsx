import React from 'react'
import logo from '../../asset/image/logo/logo.png'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="footer-col">
                            <div className="contact-item">
                                <span>email:</span>
                                <button>info@gmail.com</button>
                            </div>
                            <div className="contact-item">
                                <span>address:</span>
                                <button>Baku, Azerbaijan</button>
                            </div>
                            <div className="contact-item">
                                <span>number:</span>
                                <button>+994 55 555 55 55</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="footer-col"><Link offset={-50} to='header' className="logo"><img src={logo} alt=''/></Link></div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="footer-col"><span>&copy; Triablo 2014. All Rights Reserved</span></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
