import { useState } from 'react'
import './SearchInp.scss'
export default function SearchInp() {
    let [value, setValue] = useState('')
    return(
        <div className="search_content">
            <form action="/">
                <input 
                type="text" 
                placeholder="Restoran yoki taom nomini kiriting" 
                onChange={(e)=> setValue(e.target.value)} 
                value={value}
                />
            </form>
        </div>
    )
}