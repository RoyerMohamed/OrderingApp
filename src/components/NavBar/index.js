import React from 'react'
import { Bars, Nav , NavIcon, Navlink} from './NavbarComponent.js'

function index({toggle}) {
    return (
        <>
            <Nav>
                <Navlink to="/">Pizza</Navlink>
                <NavIcon onClick={toggle} >
                    <p>menu</p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
    )
}

export default index
