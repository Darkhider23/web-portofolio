import React from "react";
import Logo from '../assets/logo.png';
const Header = () =>{

    const btnanimate = () =>{
        let btn = document.getElementById("btn");
            btn.onmousemove = function (e) {
                let rect = e.target.getBoundingClientRect();

                let x = e.clientX - rect.left;
                btn.style.setProperty("--x", x + "px");
            }
    };

    return (
        <header className=' py-8'>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <a href="/#">
                        <img className='h-[2em] w-[10em]' src={Logo} alt=''/>
                    </a>
                    <button onMouseOver={btnanimate} id="btn" className='btn btn-sm'>Work with me</button>
                </div>
            </div>
        </header>
    )
};

export default Header;