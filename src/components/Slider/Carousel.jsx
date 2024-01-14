import "./Slider.scss"
import Pitssa from "../../assets/icons/pitssa-icon.png"
import FastFood from '../../assets/icons/fast-food-icon.png'
import milliyFood from '../../assets/icons/milliy-food-icon.png'
import muzqaymoqIcon from '../../assets/icons/muzqaymoq-icon.png'
import shirinliklar from '../../assets/icons/shirinliklar-icon.png'
import yevropaFood from '../../assets/icons/yevropa-food-icon.png'

function Carousel() {
        return (
        <div className="slider container">
            <div className="item">
                <img src={Pitssa} alt="Pitssa" />
                <p>Pitssa</p>
            </div>
        </div>
    );
}

export default Carousel;