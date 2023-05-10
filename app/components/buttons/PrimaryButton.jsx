import React from 'react'

const PrimaryButton = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className='w-fit text-white border border-white transition-colors rounded-xl px-7 py-3 text-lg hover:bg-white hover:text-indigo-800 font-bold'
        >
            {children}
        </button>
    )
}

export default PrimaryButton