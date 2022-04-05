import { InputHTMLAttributes } from 'react'

import '../assets/scss/components/defaultsearchinput.scss'

type DefaultInputProps = InputHTMLAttributes<HTMLInputElement>

export function DefaultSearchInput({ ...props }: DefaultInputProps) {
    return (
        <div className="search-box">
            <span className="material-icons-outlined">search</span>
            <input {...props} type='text' className='default-search-input' />
        </div>
    )
}
