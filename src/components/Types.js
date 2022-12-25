import React, { useState } from 'react'

const Types  = (props) => {
    const accepted = 'text-white bg-black'
  return (
    <div className="flex mt-10 lg:justify-center xl:justify-start sm:justify-center">
    <ul className="bg-white rounded-lg w-max text-gray-900 flex flex-row">
        {props.types.map((type, index)=>{
            if (props.acceptedType == type){
                return <li key={index} className={`px-6 py-2 border-b border-gray-200 w-full ${accepted}`} style={{cursor: 'pointer'}} onClick={()=> {props.setacceptedType(type)}}>{type}</li>
            }
            else{
                return <li key={index} className={`px-6 py-2 border-b border-gray-200 w-full`} style={{cursor: 'pointer'}} onClick={()=> {props.setacceptedType(type)}}>{type}</li>
            }
        })}
    </ul>
  </div>
  )
  
}

export default Types;
