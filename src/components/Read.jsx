import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useParams } from 'react-router'
import { useShopContext } from '../context'

function Read() {
    const { backendUrl } = useShopContext()
    const { id } = useParams()
    const { data, error, isLoading } = useQuery(["fetchById", id], () => {
        return axios.get(`${backendUrl}/api/list/singlelist/${id}`)
    })

    if (isLoading) {
        return <h1 className="text-center text-2xl font-bold">Loading...</h1>
    }

    if (error) {
        return <h1 className="text-center text-2xl font-bold text-red-500">An error has occurred</h1>
    }

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h1 className="text-3xl font-bold">{data?.data.listById.name}</h1>
            <p className="text-gray-700">{data?.data.listById.description}</p>
            <p className="text-gray-700 font-semibold">Price: {data?.data.listById.price}</p>
            <p className="text-gray-700">Created At: {data?.data.listById.createdAt}</p>
            <p className="text-gray-700">Updated At: {data?.data.listById.updatedAt}</p>
        </div>
    )
}

export default Read
