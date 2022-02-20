import PreviousMap from 'postcss/lib/previous-map';
import React, { useState, useEffect } from 'react';
import ccLogo from '../img/CC_logo.png';
import Button from './Button';
import eventThrottler from '../helpers/eventThrottler'

import '../fonts.css';

function Navbar(props) {
    const [opacityVal, setOpacity] = useState("bg-opacity-0");
    
    //Check if user is at the top of the screen.
    function handleScrollEvent (event)  {
        let positionY = window.scrollY;
        console.log(positionY)
        if(positionY > 0) {
            setOpacity("bg-opacity-1");
        }
        else {
            setOpacity("bg-opacity-0");
        }
    }

    // Functionally identical to componentDidMount
    useEffect(() => {
        window.addEventListener("scroll", handleScrollEvent)
    }, [])

  

    return(
        <nav id = "navbar-container" className = {`flex sticky overflow-x-clip justify-between top-0 z-30 px-4 h-20 -mb-20 bg-gray-700 transition ease-in-out duration-200 ` + opacityVal}>
            {/* left side */}
            <a href = "#" className = "flex flex-row items-center gap-4 py-2">
                <img className = "w-16" src = {ccLogo}></img>
                <div className = "text-yellow-500 text-2xl Almendra-SC">
                    Custard Crew  
                </div>
            </a>

            {/* right side */}
            <div className = "flex flex-row space-between">
                {props.children}
            </div>
        </nav>
    )
}

export default Navbar;