import React from 'react'

const Header = () => {
    return (
        <div className='space-y-2 text-center'>
            <h1 className='text-4xl font-bold text-transparent bg-primary bg-clip-text'>
                Todo List
            </h1>
            <p className='text-muted-foreground'>Don’t stop when you’re tired. Stop when you’re done. 🤌</p>
        </div>
    )
}

export default Header