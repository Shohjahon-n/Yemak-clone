import React from "react";
import './Header.scss';
import YemakIcon from '../../assets/icons/yemak-icon.svg';

import locationImg from '../../assets/icons/location-btn.png';

export default function Header() {
    return (
        <header>
            <div className="header-content container">
                <div className="header-main">
                    <div className="icon">
                        <img src={YemakIcon} alt="YemakLogo" />
                    </div>
                    <div className="log-in">
                        <div className="location-btn">
                            <img src={locationImg} alt="Location image" />
                        </div>
                        <div className="log-up">
                            <button className="login-btn">Kirish</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}