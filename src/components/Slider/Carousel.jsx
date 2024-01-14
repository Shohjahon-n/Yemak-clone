import React from 'react';
import './Carousel.scss';
import Pitssa from '../../assets/icons/pitssa-icon.png';
import fastFood from '../../assets/icons/fast-food-icon.png';
import muzqaymoq from '../../assets/icons/muzqaymoq-icon.png';
import shirinliklar from '../../assets/icons/shirinliklar-icon.png';
import yevropa from '../../assets/icons/yevropa-food-icon.png';
import milliy from '../../assets/icons/milliy-food-icon.png';
// This is slider page
function Carousel() {

    return (
        <div className="carousel container">
            <div className="prev_img next_prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path         fill="#333" d="M17.1 5L14 8.1L29.9 24L14 39.9l3.1 3.1L36 24z"/>
                </svg>
            </div>
            <div className="all_items">
                <div className="carousel_item">
                    <img src={Pitssa} alt="Pissa" />
                    <p>Pitssa</p>
                </div>
                <div className="carousel_item">
                    <img src={fastFood} alt="fastFood" />
                    <p>Fast Food</p>
                </div>
                <div className="carousel_item">
                    <img src={milliy} alt="milliy" />
                    <p>Milliy</p>
                </div>
                <div className="carousel_item">
                    <img src={shirinliklar} alt="Shirinliklar" />
                    <p>Shirinliklar</p>
                </div>
                <div className="carousel_item">
                    <img src={yevropa} alt="yevropa" />
                    <p>Yevropa</p>
                </div>
                <div className="carousel_item">
                    <img src={muzqaymoq} alt="muzqaymoq" />
                    <p>Muzqaymoq</p>
                </div>
            </div>
            <div className="next_img next_prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path     fill="#333" d="M17.1 5L14 8.1L29.9 24L14 39.9l3.1 3.1L36 24z"/>
                </svg>
            </div>
        </div>
    );
}


export default Carousel;
