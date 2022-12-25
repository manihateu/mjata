import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Item from '../components/Item'
import LoadSpinner from '../components/LoadSpinner'
import Slider from '../components/Slider'
import Types from '../components/Types'
import Image from '../static/kol9h.jpg'

const ShopPage = (props) => {
    const [types, setTypes] = useState(['Роллы', 'Пицца', 'Сеты', 'Бургеры', 'Закуски', 'Десерты', 'Напитки'])
    const [acceptedType, setacceptedType] = useState('Роллы')
    const navigate = useNavigate()
  return (
    <div>
    <div className='xl:container mx-auto'>
        <Slider/>
        <Types types={types} setTypes={setTypes} acceptedType={acceptedType} setacceptedType={setacceptedType}/>
    <div className='mt-10 grid grid-rows-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 gap-x-4 gap-y-10'>
        {props.Products.map((product, index) => {
            if(product.type.toLowerCase() == acceptedType.toLowerCase()){
            return <Item Name={`${product.name}`} Price={`${product.price}`} Description={product.description} Type={product.type} Image={`${product.image}`}  ProductId={product.id} key={index} setBasket = {props.setBasket} Basket={props.Basket}/>
        }})}
    </div>
    </div>
        <Footer/>
    </div>
  )
}

export default ShopPage