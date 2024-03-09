import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='navbar'>
            <div>
                <Link href='/' className='nav-logo'>HOME</Link>
            </div>

            <div className='navs'>
                <Link href='/about' className='nav-item'>ABOUT</Link>
                <Link href='/products' className='nav-item'>PRODUCTS</Link>
            </div>

        </header>
    )
}

export default Header