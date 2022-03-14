import { InputHTMLAttributes } from 'react'

import '../assets/scss/defaultinput.scss'

type DefaultInputProps = InputHTMLAttributes<HTMLInputElement>

export function DefaultInput({...props}: DefaultInputProps) {
    return (
        <input {...props} className='default-input' />
    )
}