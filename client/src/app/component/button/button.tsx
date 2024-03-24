import React from 'react'

function Button(props: any) {
    const {children,type, onClick, color, size} = props
    return (
        <>
            <button className={` ${size} text-white font-bold text-center py-2 px-4 rounded ${color}`} type={type} onClick={onClick}>
                {children} 
            </button>
        </>
    )
}

export default Button