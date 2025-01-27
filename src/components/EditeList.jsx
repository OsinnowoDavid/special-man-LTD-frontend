import React from 'react'
import { useQuery } from 'react-query'
import { useShopContext } from '../context'
import { useParams } from 'react-router'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function EditeList() {
    const { backendUrl } = useShopContext()
    const { id } = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        axios.get(`${backendUrl}/api/list/singlelist/${id}`).then((response) => {
            console.log(response.data.listById)
            setName(response.data.listById.name)
            setDescription(response.data.listById.description)
            setPrice(response.data.listById.price)
        }).catch((error) => {
            console.log(error.message)
        })
    }, [id, backendUrl])

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${backendUrl}/api/list/editlist/${id}`, { name, price, description }).then((response) => {
            console.log(response.data)
            navigate("/")
        }).catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <div className='flex justify-center mt-10'>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg' onSubmit={update}>
                <h1>Edit</h1>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        List Name
                    </label>
                    <input 
                        type='text' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        List Description
                    </label>
                    <input 
                        type='text' 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        List Price
                    </label>
                    <input 
                        type='text' 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
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

export default EditeList
