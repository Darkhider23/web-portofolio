import React from "react";
import Logo from '../assets/logo.png';
import './button-animation'
const Header = () =>{
    return (
        <header className=' py-8'>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <a href="/#">
                        <img className='h-[2em] w-[10em]' src={Logo} alt=''/>
                    </a>
                    <button id="btn" className='btn btn-sm'>Work with me</button>
                </div>
            </div>
        </header>
    )
};

export default Header;