import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = (props) => {
    const addToCard = (name, price, description, type, image, id, setBasket) => {
        setBasket((products) => [
            ...products,
            {
                name: name,
                price: price,
                type: type,
                description: description,
                image: image,
                id: id
            },
        ]);
    }
    const {id} = useParams()
    const thisProduct = props.Products.filter(item => item.id == id)
    return (
        <div className='mt-20 grid lg:grid-cols-2 gap-4'>
            <img src = {thisProduct[0].image} className='my-auto mx-auto rounded-lg'/>
            <div className='flex content-start flex-col'>
                <h1 className='text-3xl'>{thisProduct[0].name}</h1>
                <p className='mt-3 text-xl'>Описание:</p>
                <p className='text-xl'>{thisProduct[0].description}</p>
                <div className='my-auto mx-auto flex flex-col'>
                    <h1 className='mx-auto text-3xl'>{thisProduct[0].price} руб</h1>
                    <button onClick={() => {addToCard(thisProduct[0].name, thisProduct[0].price, thisProduct[0].description, thisProduct[0].type, thisProduct[0].image, thisProduct[0].id, props.setBasket)}} className="inline-block mt-3 px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ">Добавить в корзину</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage