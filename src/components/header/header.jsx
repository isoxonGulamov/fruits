import React from "react";
import "./header.css"

export const Header = ()=>{
  return (
    <div className="container">
           <div className="header__box">
               <ul className="header__list">
                   <li className="header__item bg-danger">
                   <span className="eng">EN🔻</span>
                    <span className="usd">USD🔻</span>
                   </li>
                   <li className="header__item ">
                   <input className="searchProduct" type="text"   placeholder="Item" />
                  
                   </li>
                   <li className="header__item">
                   <span className="myprofile">My profile</span>
                   </li>
                   <li className="header__item ">
                   <button className="logout">Log Out</button>
                   </li>
               </ul>
           </div>
           <div className="header__bottom">
           <ul className="header__list-bottom">
                   <li className="header__item-bottom">
                   <h2 className="title2">HOME</h2>
                   </li>
                   <li className="header__item-bottom ">
                     <h2 className="title2">KORZINKA</h2>
                  
                   </li>
                   <li className="header__item-bottom">
                   <h2 className="title2">CONTACT</h2>
                   </li>
                   <li className="header__item-bottom ">
                    <h2 className="title2">SHOPPING</h2>
                   </li>
               </ul>
           </div>
           </div>
    
  )
}