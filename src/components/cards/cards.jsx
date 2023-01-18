import React from "react";
export const Card = ({name,price,img,title,deleteitem,id,setitem,raiting})=>{
return (

  <div className="card-box">
    <img className="fruit-img" src={img} alt="fruits" />
    <h1 className="titleName">{name}</h1>
    <span className="textname">{title}</span>
     <span>{raiting}</span>
    <p className="textnarx">{price}$</p>
    <button className="delete" onClick={()=>deleteitem(id)}>Delete</button>
    <button className="add" onClick={()=>setitem(id)}>Add</button>
  </div>
  
)

}