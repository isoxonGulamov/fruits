import React from "react";
import "./add.css"
export const AddCart = ({name,price,id,deleteitem2})=>{
  const [qiymat,setqiymat] = React.useState(1)
  const [umumiy,setumumiy] = React.useState(price)
  const plus = ()=>{
  setqiymat((qiymat)=>{
    return qiymat + 1
  })
  }
  const remove = ()=>{
    setqiymat((qiymat)=>{
      return  qiymat - 1 
    })
  }
  {
    if(qiymat == 0){
      deleteitem2(id)
    }
  }
  let natija = qiymat*price

  return (
  
    <div className="addbox">
        
      <div className="malumot">
      <button className="del" onClick={()=>deleteitem2(id)}>X</button>
      <h1 className="Name">{name}</h1>
      <p className="pricen">{price}$</p>
      
      </div>
      <div className="btnbox">
        <button onClick={plus} className="add2">+</button><span>{qiymat}</span><button onClick={remove} className="remove">-</button>
        <p className="all">Total:{natija}$</p>
                  
        
      </div>
    
    </div>
    
  )
}