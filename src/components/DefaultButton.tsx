import { ButtonHTMLAttributes } from 'react'

import '../assets/scss/components/defaultbutton.scss'

type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
}

export function DefaultButton({className='', ...props}: DefaultButtonProps) {

    return (
        <button {...props} className={`default-button ${className}`} />
    )
}