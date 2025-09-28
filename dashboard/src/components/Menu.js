import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const Menu=()=> {

    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen]= useState(false);

    const handleMenuClick=(index) =>{
        setSelectedMenu(index);
    };
    const handleProfileClick=(index)=>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const menuClass ="menu";
    const activeMenuClass="menu selected";

    return ( 
        <div className='menu-container'>
            <img style={{width:"50px",margin:"0 5rem 0 0"}} src='media\download.png'/>
            <div className='menus'>
                <ul>
                    <li>
                        <Link style={{textDecoration:"none"}} 
                        to={"/"}
                        onClick={()=>handleMenuClick(0)}    
                        >
                        <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} 
                        to={"/order"}
                        onClick={()=>handleMenuClick(1)}    
                        >
                        <p className={selectedMenu===1 ? activeMenuClass : menuClass}>Order</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} 
                        to={"/holding"}
                        onClick={()=>handleMenuClick(2)}    
                        >
                        <p className={selectedMenu===2 ? activeMenuClass : menuClass}>Holding</p>
                        </Link>
                    </li>
                    <li>
                        
                       <Link style={{textDecoration:"none"}} 
                        to={"/positions"}
                        onClick={()=>handleMenuClick(3)}    
                        >
                        <p className={selectedMenu===3 ? activeMenuClass : menuClass}>Position</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} 
                        to={"/funds"}
                        onClick={()=>handleMenuClick(4)}    
                        >
                        <p className={selectedMenu===4 ? activeMenuClass : menuClass}>Funds</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} 
                        to={"/app"}
                        onClick={()=>handleMenuClick(5)}    
                        >
                        <p className={selectedMenu===5 ? activeMenuClass : menuClass}>Apps</p>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className='profile'>
                    <div className='avatar'>
                        <i class="fa-solid fa-user"></i>
                        <p className='username'>USERID</p>
                    </div>
                </div>
            </div>
        </div>
     );
};

export default Menu;