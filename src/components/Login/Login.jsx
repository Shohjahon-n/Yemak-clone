import closeBtn from '../../assets/icons/close-btn.png'
import './Login.scss'
import { useState } from 'react'
export default function Login({ changeActive }) {
    let [value, setValue] = useState('')
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
                <form action="/">
                    <input type="number" placeholder="+998 (__) ___-__-__ "
                        value={value} onChange={(e) => setValue(e.target.value)} />
                    {value.length !== 12 || !value.startsWith(+998)
                        ? <button className="login-btn" onClick={() => alert('error')}>Tasdiqlash</button> :
                        <button className="login-btn active-btn"
                            onClick={() => {
                                changeActive(), console.log('User phone:', value)
                                alert('Tasdiqlandi')
                            }}>Tasdiqlash</button>}
                </form>
            </div>
        </div>
    )
}