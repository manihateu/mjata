import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BasketItem = (props) => {
    const navigate = useNavigate()

  return (
    <div>
        <div className="flex items-center justify-between hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
        <div className="w-20" onClick={()=> {navigate(`${props.Link}`)}} style={{cursor: 'pointer'}}>
            <img className="h-30" src={props.Image} alt=""/>
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">{props.Name}</span>
            <span className="text-gray-500 text-xs">{props.Type}</span>
            <p style={{cursor: 'pointer'}} className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => {props.setBasket(props.Basket.filter(item => item.id != props.Id))}}>Удалить</p>
        </div>
        </div>
        
        <span className="text-center w-1/5 font-semibold text-sm">{props.Price} руб</span>
    </div>
  </div>
  )
}
export let CountPrice
export default BasketItem