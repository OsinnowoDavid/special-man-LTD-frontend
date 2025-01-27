import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useShopContext } from '../context.jsx'
import { useNavigate } from 'react-router'

function Addlist() {
    const navigate = useNavigate()
    const {backendUrl} = useShopContext()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const submit = (e) => {
        e.preventDefault()
        axios.post(`${backendUrl}/addlist`, { name, price, description })

        navigate("/")
    }

    return (
        <div className='flex justify-center mt-10'>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg' onSubmit={submit}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        List Name
                    </label>
                    <input 
                        type='text' 
                        placeholder='List name' 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        List Description
                    </label>
                    <input 
                        type='text' 
                        placeholder='List details' 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        List Price
                    </label>
                    <input 
                        type='text' 
                        placeholder='Price' 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <button 
                        type='submit' 
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Addlist
