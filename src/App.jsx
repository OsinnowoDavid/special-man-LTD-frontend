import React from 'react'
import Home from './components/Home.jsx'
import { Route, Routes } from 'react-router'
import Addlist from './components/Addlist.jsx'
import EditeList from './components/EditeList.jsx'
import { QueryClientProvider, QueryClient } from "react-query"
import Read from './components/Read.jsx'

function App() {
  
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<Addlist/>}></Route>
          <Route path='/edit/:id' element={<EditeList/>}></Route>
          <Route path='/read/:id' element={<Read/>}></Route>
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
