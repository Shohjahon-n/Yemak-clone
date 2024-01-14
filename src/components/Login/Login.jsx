import closeBtn from '../../assets/icons/close-btn.png'
import './Login.scss'
import { useState } from 'react'
export default function Login({ changeActive }) {
    let [value, setValue] = useState('')

    const changeValue = (e) => {
        // e.preventDefault()
        setValue(e.target.value)
    }

    return (
        <div className="login" onClick={changeActive}>
            <div className="login-content" onClick={(e) => e.stopPropagation()}>
                <div className="login-header">
                    <p className='login-text'>Kirish</p>
                    <div className="close-btn"><img
                        onClick={changeActive} src={closeBtn}
                        alt="close btn" /></div>
                </div>
                <hr />
                <form action="/" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="+998 (__) ___-__-__ "
                        value={value} onChange={changeValue} />
                    <button className="login-btn">Tasdiqlash</button>
                </form>
            </div>
        </div>
    )
}