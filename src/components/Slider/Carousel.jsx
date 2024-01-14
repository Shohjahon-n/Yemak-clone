import React from 'react';
import './Carousel.scss';
import Pitssa from '../../assets/icons/pitssa-icon.png';
import fastFood from '../../assets/icons/fast-food-icon.png';
import muzqaymoq from '../../assets/icons/muzqaymoq-icon.png';
import shirinliklar from '../../assets/icons/shirinliklar-icon.png';
import yevropa from '../../assets/icons/yevropa-food-icon.png';
import milliy from '../../assets/icons/milliy-food-icon.png';

function Carousel() {

    return (
        <div className="carousel container">
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
    );
}


export default Carousel;
