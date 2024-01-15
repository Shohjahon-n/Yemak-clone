import { useState } from 'react'
import './SearchInp.scss'
export default function SearchInp() {
    let [value, setValue] = useState('')
    let [focus, setFocus] = useState(false)
    const changeFocus = () => {
        setFocus(false)
    }
    const changeBlur = () => {
        setFocus(true)
    }
    return (
        <div className="search_content">
            <form action="/">
                <input
                    type="text"
                    placeholder="Restoran yoki taom nomi"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    onBlur={() => changeFocus()}
                    onFocus={() => changeBlur()}
                />
                {
                    focus ? <span className='inp_focus'></span> : null
                }
            </form>
        </div>
    )
}