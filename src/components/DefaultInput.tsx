import { InputHTMLAttributes } from 'react'

import '../assets/scss/components/defaultinput.scss'

type DefaultInputProps = InputHTMLAttributes<HTMLInputElement>

export function DefaultInput({...props}: DefaultInputProps) {
    return (
        <input {...props} className='default-input' />
    )
}