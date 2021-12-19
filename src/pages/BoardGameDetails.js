import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import LoadingIndicator from '../components/LoadingIndicator'

const BoardGameDetails = () => {
  const [gameBoardDetails, setgameBoardDetails] = useState([])
  const [loading, setLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    if (id === 'random') {
      fetch('https://boardgames-katie.herokuapp.com/boardgames/random')
        .then((res) => res.json())
        .then((data) => {
          // convert Object Array to Object
          console.log(Object.assign({}, ...data.response))
          setgameBoardDetails(Object.assign({}, ...data.response))
        })
        .finally(setLoading(false))
    } else {
      fetch(`https://boardgames-katie.herokuapp.com/boardgames/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setgameBoardDetails(data.response)
          } else {
            setErrorMessage(data.error)
            setIsEmpty(true)
          }
        })
        .catch((err) => {
          setIsEmpty(true)
          setErrorMessage(err.error)
        })
        .finally(setLoading(false))
    }
  }, [id])

  useEffect(() => {
    if (isEmpty) {
      // if there is no reviews found, navigate to page 404 and display the response message
      // pass data with state when navigating
      navigate('/404', { state: { message: errorMessage } })
    }
  }, [isEmpty, navigate, errorMessage])

  return (
    <div>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <div className='single-boardgame-card'>
            <p className='card-title'>{gameBoardDetails.name}</p>
            <div className='card-info'>
              <div>
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
