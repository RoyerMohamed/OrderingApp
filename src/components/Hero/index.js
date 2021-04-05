import React, { useState } from 'react';
import {HeroContainer ,HeroContente, HeroItems ,HeroH1  , HeroP , HeroBtn} from './HeroElements'
import Navbar from '../NavBar'
import Sidebar from '../SideBar';

function Index() {
    const [isOpen , setIsOpen] = useState(false)

    const toggle =()=>{
        setIsOpen(!isOpen)

    }
    return (
       <HeroContainer >
           <Navbar toggle={toggle}/>
           <Sidebar isOpen={isOpen}  toggle={toggle}/>
           <HeroContente>
               <HeroItems>
                   <HeroH1>Greatest Pizza enver </HeroH1>
                   <HeroP>ready in 60 seconds </HeroP>
                   <HeroBtn>Place order </HeroBtn>
               </HeroItems>
           </HeroContente>
       </HeroContainer>
    );
}

export default Index;