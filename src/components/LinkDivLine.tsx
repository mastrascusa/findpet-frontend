import { ReactNode } from "react"
import { Link } from "react-router-dom"

import '../assets/scss/components/linkdivline.scss'

interface LinkDivLineProps {
    children?: ReactNode
    link: string
}

export function LinkDivLine({ children, link }: LinkDivLineProps) {
    return (
        <div className="link-div-container">
            <div className="line"></div>
            {children} <Link to={link}>Clique aqui</Link>
            <div className="line"></div>
        </div>
    )
}
