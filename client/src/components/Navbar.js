import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import "../style/Navbar.css"

function Navbar(){


    useEffect(() => {
      

    }, [])


    return(
        
        <>
            <header className="menu">
                <div className="menu-wrap">
                <input type="checkbox" id="checkbox"></input>
                    <nav>
                        <ul>
                            <li><a href="/"><h1>Företag namn här</h1></a></li>
                            <li><a href="/Boka">Boka Tid</a></li>
                            <li><a href="/Om">Om</a></li>
                            
                        </ul>
                    </nav>
                <label for="checkbox">
                <i className="fa fa-bars menu-icon"></i>
                </label>
                </div>
            </header>
        </>
    )
}



export default Navbar