import React from 'react'
import './Footer.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import footer_logo from "../../assets/footer_logo.svg"
import user_icon from "../../assets/user_icon.svg"

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className='name'>
                        <h1>Ajay</h1>
                        <img src={theme_pattern} alt="" />
                    </div>

                    <p>I am a full-stack developer, graduated from MAIT in Computer Science in 2025</p>

                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer