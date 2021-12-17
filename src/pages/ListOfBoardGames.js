import React, { useEffect, useState } from 'react'

import LoadingIndicator from '../components/LoadingIndicator'
import BoardGameCard from '../components/BoardGameCard'

const ListOfBoardGames = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://boardgames-katie.herokuapp.com/boardgames')
      .then((res) => res.json())
      .then((data) => {
        console.log('data.response: ', data.response)
        setList(data.response)
      })
      .finally(setLoading(false))
  }, [])

  return (
    <div className='list-of-boardgames'>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <p className='page-title'>List of Board Games!</p>
          <section className='boardgame-cards-section'>
            {list.map((review) => (
              <BoardGameCard key={review._id} review={review} />
              // <p>{review.name}</p>
            ))}
          </section>
        </>
      )}
    </div>
  )
}

export default ListOfBoardGames
