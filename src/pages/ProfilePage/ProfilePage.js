import React, { useState } from 'react'

const ProfilePage = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          props.setUserPhoto(URL.createObjectURL(event.target.files[0]));
        }
    }
  return (
    <div className='xl:container mx-auto'>
        <div className='flex mt-10 flex-row justify-center'>
            <img src={props.userPhoto} className='mx-auto object-cover p-1 w-40 h-40 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'/>
        </div>
        <div className='flex flex-col content-center text-center'>
            <h1 className='tracking-widest mx-auto mt-10'>{props.userName}</h1>
            <button className="w-1/6 mx-auto mt-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                 Выйти
            </button>
        </div>
        <div>
            <div className="flex rounded-md shadow-sm lg:w-1/3 sm:w-100 mt-5">
                <span className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Email</span>
                <input onChange={(e) => {setEmail(e.target.value)}} type="text" className="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"/>
            </div>
            <div className="flex rounded-md shadow-sm lg:w-1/3 sm:w-100 mt-5">
                <span className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Адрес</span>
                <input onChange={(e) => {setPassword(e.target.value)}} type="text" className="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"/>
            </div>
            <div className="flex rounded-md shadow-sm lg:w-1/3 sm:w-100 mt-5">
                <span className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Имя</span>
                <input onChange={(e) => {setName(e.target.value)}} type="text" className="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"/>
            </div>
            <div className="flex rounded-md shadow-sm lg:w-1/3 sm:w-100 mt-5">
                <span className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Фамилия</span>
                <input onChange={(e) => {setLastName(e.target.value)}} type="text" className="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"/>
            </div>
        </div>
        <div className="flex justify-start mt-4">
            <div className="mb-3 w-96">
                <label htmlFor="formFile" className="form-label inline-block mb-2">Добавить фото</label>
                <input onChange={onImageChange} className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"/>
            </div>
        </div>
        <div className='flex content-center'>
            <button onClick={() => {props.setUserName(`${name} ${lastName}`)}} className="w-1/6 mx-auto mt-2 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                    Сохранить
            </button>
        </div>
    </div>
  )
}

export default ProfilePage