import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router'
import axios from 'axios'
import { useShopContext } from '../context'
import { useQuery, useQueryClient } from 'react-query'

function Home() {
    const { backendUrl } = useShopContext()
    const queryClient = useQueryClient()
    const { data, isLoading, error } = useQuery("fetchlist", () => {
        return axios.get(`${backendUrl}/api/list/getAllList`)
    })

    const deleteList = async (id) => {
        try {
            await axios.delete(`${backendUrl}/api/list/deletelist/${id}`)
            queryClient.invalidateQueries("fetchlist")
        } catch (error) {
            console.error("Error deleting list:", error.message)
        }
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>An error has occurred</h1>
    }

    
    return (
        <>
            <div className='text-center font-bold text-2xl mt-10'>
                Special-man Global Solution LTD Internship
            </div>
            <div className='flex justify-center mt-5'>
                <Link to="/add">
                    <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300'>
                        Add List +
                    </button>
                </Link>
            </div>
            {data?.data.getall.map((list) => (
                <div className='flex justify-center mt-12 space-x-5 ml-5' key={list.id}>
                    <h1 className='text-lg font-semibold'>{list.name}</h1>
                    <h1 className='text-lg font-semibold'>{list.description}</h1>
                    <h1 className='text-lg font-semibold'>{list.price}</h1>
                    <Link to={`/edit/${list._id}`} className='text-blue-500 hover:underline'>
                        Edit
                    </Link>
                    <Link to={`/read/${list._id}`} className='text-blue-500 hover:underline'>
                        Read list
                    </Link>
                    <button onClick={() => deleteList(list._id)} className='text-blue-500 hover:underline'>
                        Delete
                    </button>
                </div>
            ))}
        </>
    )
}

export default Home
