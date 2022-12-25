import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BasketItem from '../components/BasketItem'
import {CountPrice} from '../components/BasketItem'

const BasketPage = (props) => {
    const navigate = useNavigate()
    let count = 0;
    let price = 0;
  return (
    <div>
        <div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Корзина</h1>
        </div>
        <div className="flex justify-between mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">О товаре</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Цена</h3>
        </div>
        {props.Basket.map((prod =>{
            count += 1;
            price += Number(prod.price);
            return <BasketItem key = {prod.id} Name = {prod.name} Id = {prod.id} Type={prod.type} Price={prod.price} Image={prod.image} Link={`/shop/${prod.id}`} setBasket = {props.setBasket} Basket={props.Basket}/>
        }))}

        <div onClick={() => {navigate('/shop')}} className='flex flex-row' style={{cursor: 'pointer'}}>
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          <p className='text-indigo-600'>Продолжить покупки</p>
        </div>
      </div>

      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Итого</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Товаров - {count}</span>
          <span className="font-semibold text-sm">{price} руб</span>
        </div>
        
        <div className="py-10">
          <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">ПРОМО КОД</label>
          <input type="text" id="promo" placeholder="Введите свой промокод" className="p-2 text-sm w-full"/>
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Подтвердить</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Итог:</span>
            <span>{price} руб</span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Заказать</button>
        </div>
      </div>

    </div>
  </div>
    </div>
  )
}

export default BasketPage