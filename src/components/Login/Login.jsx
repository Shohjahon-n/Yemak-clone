import closeBtn from '../../assets/icons/close-btn.png'
import './Login.scss'
export default function Login({ changeActive }) {
    return (
        <div className="login" onClick={changeActive}>
            <div className="login-content">
                <div className="login-header">
                    <p className='login-text'>Kirish</p>
                    <div className="close-btn"><img
                        onClick={changeActive} src={closeBtn}
                        alt="close btn" /></div>
                </div>
                <hr />
                <form action="/">
                    <input type="text" placeholder="+998 (__) ___-__-__ " />
                </form>
                <button className="login-btn">Tasdiqlash</button>
            </div>
        </div>
    )
}