import React from 'react'
import { Link } from 'react-router-dom'

const BoardGameCard = ({ review }) => {
  return (
    <Link to={`/boardgames/${review._id}`} className='card-link'>
      <div className='boardgame-card'>
        <p className='card-title'>{review.name}</p>
        <div className='card-info'>
          <div>
            <p>Release year: {review.year}</p>
            <p>Rank: {review.rank}</p>
            <p>Average: {review.average}</p>
          </div>
          <img src={review.thumbnail} alt='thumbnail' />
        </div>
      </div>
    </Link>
  )
}

export default BoardGameCard
