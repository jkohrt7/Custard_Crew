import PreviousMap from 'postcss/lib/previous-map';
import React, { useState } from 'react';
import ccLogo from '../img/CC_logo.png';
import Button from './Button';

function Navbar(props) {
    const [opacityVal, setOpacity] = useState("bg-opacity-0");
    window.addEventListener('scroll', handleScrollEvent);
    
    function handleScrollEvent(event) {
        let positionY = window.scrollY;
        //console.log(positionY)
        if(positionY > 0) {
            setOpacity("bg-opacity-1");
        }
        else {
            setOpacity("bg-opacity-0");
        }
    }

    return(
        <nav id = "navbar-container" className = {`flex sticky justify-between top-0 z-50 px-4 h-20 -mb-20 bg-gray-700 transition ease-in-out duration-200 ` + opacityVal}>
            {/* left side */}
            <div className = "flex flex-row items-center gap-4 py-2">
                <img className = "w-16" src = {ccLogo}></img>
                <div className = "text-white font-bold text-xl">
                    Custard Crew  
                </div>
            </div>

            {/* right side */}
            <div className = "flex flex-row space-between">
                {props.children}
            </div>
        </nav>
    )
}

export default Navbar;