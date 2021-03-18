import React, { useEffect, useState } from 'react';
import './Navbar.css';
import './';

function Navbar(){
    const [show, showHandle] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 250){
                showHandle(true);
            }else{
                showHandle(false);
            }
            return ()=>{
                window.removeEventListener("scroll");
            }
        })
    })

    return(
        <div className={`nav ${show && "black_bg"}`}>
            <div className="logo" />
            <img className="profile" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="logo" />
        </div>
    )
}


export default Navbar;