import React from 'react'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import Payment from "../../assets/payments.png"
import "./Footer.scss";

const Footer = () => {
    return <footer className='footer'>
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Placeat odio quisquam nesciunt omnis laborum
                    saepe nobis assumenda mollitia provident. Aspernatur obcaecati quod
                    ullam illum natus repellat similique, reiciendis, pariatur tempore
                    atque quos, voluptate quasi?</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">Vill Bharatpur Post Tandawa Bharatpur
                        Dist. Ambedakar Nagar, Uttar Pradesh, 224176</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: +91 8630607542</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: saurabhshuklamtss1@outlook.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>

        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    SHUKLA ELECTRONICS STORE 2023 CREATED BY SAURABH SHUKLA.  PREMIUM E-COMMERCE
                    SOLUTIONS.
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;

