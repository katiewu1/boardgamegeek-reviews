import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HeaderNavbar from './components/HeaderNavbar'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import ListOfBoardGames from './pages/ListOfBoardGames'
import BoardGameDetails from './pages/BoardGameDetails'
import TopRanked from './pages/TopRanked'
// import Random from './pages/Random'

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
        {/* <Route path='boardgames/random' element={<Random />} /> */}
        {/* <Route path='recipes' element={<AllRecipes />} /> */}
        {/* <Route path='recipes/:name' element={<RecipeDetails />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
