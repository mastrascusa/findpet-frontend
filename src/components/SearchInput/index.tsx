import { InputHTMLAttributes } from 'react'

import './styles.scss'

type DefaultInputProps = InputHTMLAttributes<HTMLInputElement>

export function SearchInput({ ...props }: DefaultInputProps) {
    return (
        <div className="search-box">
            <span className="material-icons-outlined">search</span>
            <input {...props} type='text' className='default-search-input' />
        </div>
    )
}
