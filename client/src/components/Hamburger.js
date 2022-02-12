import menu from '../img/menu.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



import './hamburgerMenu.css'

function Hamburger(props) {
    const [menuStyle, setMenuStyle] = useState("HamburgerMenu-closed");

    //move menu component over from off-screen.
    function moveMenu() {

        if(menuStyle === "HamburgerMenu-closed") {
            setMenuStyle("HamburgerMenu-open")
        } 
        else {
            setMenuStyle("HamburgerMenu-closed")
        }
    }

    const links = [
        {name: "About", isLocal: true, link: "/"},
        {name: "Crew", isLocal: true, link: "/crew"},
        {name: "Calendar", isLocal: true, link: "/calendar"},
        {name: "Twitch", isLocal: false, link: "https://www.twitch.tv/custardcrew"},
    ]

    return(
        <div className='m-auto relative'>
            <img onClick = {moveMenu} className = "w-8  filter invert hover:cursor-pointer z-50" src = {menu}></img>
            <div className = {menuStyle}>
                <div className = "flex flex-col mt-12">
                    {links.map((item) => {
                        if(item.isLocal) {
                            return(
                                <Link onClick= {moveMenu} to ={item.link} className='flex-grow border-b-white border-b-2 text-white text-2xl py-4' >
                                    {item.name}
                                </Link>
                            )
                        }
                        else {
                            return(
                                <a onClick= {moveMenu} href = {item.link} className='flex-grow border-b-white text-white text-2xl py-4'>
                                    {item.name}
                                </a>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
        
    );
}

export default Hamburger;