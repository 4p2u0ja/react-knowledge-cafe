import profile from '../../images/profile.png'
import React from 'react';

const Header = () => {
    return (
        <header className='flex  justify-between items-center p-4 max-w-7xl mx-auto border-b-2'>
             <h1 className='text-4xl font-semibold'>Knowledge cafe</h1>  
        <img src={profile}></img>
        </header>
    );
};

export default Header;