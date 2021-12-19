import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LoadingIndicator from '../components/LoadingIndicator'
import BoardGameCard from '../components/BoardGameCard'

const ListOfBoardGames = () => {
  const [list, setList] = useState([])
  const [year, setYear] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    if (year) {
      fetch(
        `https://boardgames-katie.herokuapp.com/boardgames/year/${year}?page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            // console.log('data.response: ', data.response)
            console.log('data.success:', data.success)
            console.log('data.totalPages:', data.totalPages)
            setList(data.response)
            setTotalPages(data.totalPages - 1)
          } else {
            console.log('error message error: ', data.error)
            setErrorMessage(data.error)
            setIsEmpty(true)
          }
        })
        .catch((err) => {
          setIsEmpty(true)
          setErrorMessage(err.error)
        })
        .finally(setLoading(false))
    } else {
      fetch(`https://boardgames-katie.herokuapp.com/boardgames?page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            // console.log('data.response: ', data.response)
            console.log('data.success:', data.success)
            setList(data.response)
            setTotalPages(data.totalPages - 1)
          } else {
            console.log('error message error: ', data.error)
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
  }, [page, year])

  useEffect(() => {
    if (isEmpty) {
      // if there is no reviews found, navigate to page 404 and display the response message
      // pass data with state when navigating
      navigate('/404', { state: { message: errorMessage } })
    }
  }, [isEmpty, navigate, errorMessage])

  const handlePrevPageChange = () => {
    setPage(page - 1)
  }

  const handleNextPageChange = () => {
    setPage(page + 1)
  }

  // const fetchYearReleased = (value) => {
  //   console.log('value: ', value)
  //   setLoading(true)
  //   fetch(
  //     `https://boardgames-katie.herokuapp.com/boardgames/year/${value}?page=${page}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success) {
  //         // console.log('data.response: ', data.response)
  //         console.log('data.success:', data.success)
  //         setList(data.response)
  //       } else {
  //         console.log('error message error: ', data.error)
  //         setErrorMessage(data.error)
  //         setIsEmpty(true)
  //       }
  //     })
  //     .catch(() => setIsEmpty(true))
  //     .finally(setLoading(false))
  // }

  // const onHandleChange = (e) => {
  //   console.log('e target value: ', e.target.value)
  //   // setSearchValue(e.target.value)
  //   setYear(e.target.value)
  // }

  return (
    <div className='list-of-boardgames'>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <p className='page-title'>
            List of BoardGameGeek Reviews (20 per page)
          </p>
          <div className='search-input'>
            <input
              type='text'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='search for release year...'
            />
            <button type='button' onClick={() => setYear(searchValue)}>
              search
            </button>
          </div>
          <div className='page-info-wrapper'>
            <div>
              <p>Current page no: {page}</p>
              <p>Last page: {totalPages}</p>
            </div>
            <div className='page-button-container'>
              <button
                type='button'
                onClick={() => handlePrevPageChange()}
                disabled={page < 1}
              >
                Previous page
              </button>
              <button
                type='button'
                onClick={() => handleNextPageChange()}
                disabled={page === totalPages}
              >
                Next page
              </button>
            </div>
          </div>
          <section className='boardgame-cards-section'>
            {list.map((review) => (
              <BoardGameCard key={review._id} review={review} />
              // <p>{review.name}</p>
            ))}
          </section>
          <div className='page-info-wrapper'>
            <div>
              <p>Current page no: {page}</p>
              <p>Last page: {totalPages}</p>
            </div>
            <div className='page-button-container'>
              <button
                type='button'
                onClick={() => handlePrevPageChange()}
                disabled={page < 1}
              >
                Previous page
              </button>
              <button
                type='button'
                onClick={() => handleNextPageChange()}
                disabled={page === totalPages}
              >
                Next page
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ListOfBoardGames
