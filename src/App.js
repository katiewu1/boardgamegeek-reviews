import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HeaderNavbar from './components/HeaderNavbar'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import ListOfBoardGames from './pages/ListOfBoardGames'
import BoardGameDetails from './pages/BoardGameDetails'
import TopRanked from './pages/TopRanked'

export const App = () => {
  return (
    <BrowserRouter>
      <HeaderNavbar />
      <Routes>
        <Route path='/404' element={<NotFound />} />
        <Route path='/' element={<HomePage />} />
        <Route path='boardgames' element={<ListOfBoardGames />} />
        <Route path='boardgames/:id' element={<BoardGameDetails />} />
        <Route path='ranked' element={<TopRanked />} />
      </Routes>
    </BrowserRouter>
  )
}
