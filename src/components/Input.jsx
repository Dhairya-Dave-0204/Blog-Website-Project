import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = "",
    ...props
}, ref) {
    
    const id = useId();

    return (
        <div className='w-full'>
            {label && <label className='inline-block pl-1 mb-1' htmlFor={id}> {label} </label>}
            <input
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none duration-200 border 
                w-full border-gray-200 focus:bg-gray-50 ${className}`}
                ref={ref}
                id={id}
                {...props}
            />
        </div>
    )
})

export default Input