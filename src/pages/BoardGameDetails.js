import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import LoadingIndicator from '../components/LoadingIndicator'

const BoardGameDetails = () => {
  const [gameBoardDetails, setgameBoardDetails] = useState([])
  const [loading, setLoading] = useState(false)
  //   const [randomizing, setRandomizing] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    if (id === 'random') {
      fetch('https://boardgames-katie.herokuapp.com/boardgames/random')
        .then((res) => res.json())
        .then((data) => {
          console.log(data.response)
          setgameBoardDetails(data.response)
        })
        .finally(setLoading(false))
    } else {
      fetch(`https://boardgames-katie.herokuapp.com/boardgames/${id}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log('data.response: ', data.response)
          // console.log('bayesAverage type: ', typeof data.response.bayesAverage)
          // console.log(
          //   'data.response.bayesAverage.toFixed(2)',
          //   data.response.bayesAverage.toFixed(2)
          // )
          setgameBoardDetails(data.response)
        })
        .finally(setLoading(false))
    }
  }, [id])

  return (
    <div>
      <p>Board game details!</p>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <div className='single-boardgame-card'>
            <p className='card-title'>{gameBoardDetails.name}</p>
            <div className='card-info'>
              <div>
                <p>{gameBoardDetails.name}</p>
                <p>Release year: {gameBoardDetails.year}</p>
                <p>Rank: {gameBoardDetails.rank}</p>
                <p>Average: {gameBoardDetails.average}</p>
                <p>
                  Bayesian average:{' '}
                  {Number(gameBoardDetails.bayesAverage).toFixed(2)}
                </p>
                <p>Users rated: {gameBoardDetails.usersRated}</p>
                <p>
                  URL:{' '}
                  <a
                    href={`https://boardgamegeek.com${gameBoardDetails.url}`}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    {gameBoardDetails.url}
                  </a>
                </p>
              </div>
              <img src={gameBoardDetails.thumbnail} alt='thumbnail' />
            </div>
          </div>
          {/* <button type='button' onClick={() => }>
            Random?
          </button> */}
        </>
      )}
    </div>
  )
}

export default BoardGameDetails
