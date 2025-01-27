import React from 'react'
import Home from './components/Home.jsx'
import { Route, Routes } from 'react-router'
import Addlist from './components/Addlist.jsx'
import EditeList from './components/EditeList.jsx'
import { QueryClientProvider, QueryClient } from "react-query"

function App() {
  
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add/:id' element={<Addlist/>}></Route>
          <Route path='/edit/:id' element={<EditeList/>}></Route>
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
