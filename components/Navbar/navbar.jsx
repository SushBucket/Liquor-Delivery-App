import React, { useContext, useState } from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets'
import {Link, useNavigate} from "react-router-dom"
import { Storecontext } from '../../context/storecontext'

const navbar = ({setShowLogin}) => {

    const[menu,setMenu] = useState("MENU");

    const {getTotalCartAmount,token,setToken} = useContext(Storecontext);
    const navigate = useNavigate();
    const logout = () =>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={() =>setMenu("HOME")} className={menu==="HOME"?"active":""}>HOME</Link>
            <a href='#explore-menu' onClick={() =>setMenu("MENU")} className={menu==="MENU"?"active":""}>MENU</a>
            <a href='#app-download' onClick={() =>setMenu("MOBILE")} className={menu==="MOBILE"?"active":""}>MOBILE APP</a>
            <a href='#footer' onClick={() =>setMenu("CONTACT")} className={menu==="CONTACT"?"active":""}>CONTACT US</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
            :<div className='navbar-profile'>
                <img src={assets.profile_icon} alt="" />
                <ul className='nav-profile-dropdown'>
                    <li onClick={()=>navigate("/myorders")}><img src={assets.bag_icon} alt=""/><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
            </div>}
        </div>
    </div>
  )
}

export default navbar
