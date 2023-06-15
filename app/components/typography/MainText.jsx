import React from 'react'

const MainText = ({ children, className }) => {
    return (
        <h1 className={`text-7xl font-semibold leading-tight tracking-wide mb-8 ${className}`}>{children}</h1>
    )
}

export default MainText