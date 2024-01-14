import './Header.scss';
import YemakIcon from '../../assets/icons/yemak-icon.svg';
import locationImg from '../../assets/icons/location-btn.png';
import { useState } from 'react';
//components
import SearchInp from '../SearchInp/SearchInp';
import Login from '../Login/Login';
export default function Header() {
    let [active, setActive] = useState(false)

    const changeActive = () => {
        setActive(!active)
    }

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
                            <button onClick={changeActive} className="login-btn">Kirish</button>
                        </div>
                    </div>
                </div>
                <SearchInp />
                {active ?
                    <Login changeActive={changeActive} />
                    : null}
            </div>
        </header>
    )
}