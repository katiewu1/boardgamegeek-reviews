import React from 'react'
import { Link } from 'react-router-dom'

const BoardGameCard = ({ review }) => {
  //   const { id } = useParams()

  return (
    // <ul className='ul-boardGames'>
    //   {list.map((boardGame) => (
    //     <Link
    //       key={id}
    //       to={`/boardgames/${id}`} // &page=${page}
    //       style={{ color: '#A20A0A' }}
    //     >
    //       <li>{boardGame.name}</li>
    //     </Link>
    //   ))}
    // </ul>
    <Link to={`/boardgames/${review._id}`} className='card-link'>
      <div className='boardgame-card'>
        <p className='card-title'>{review.name}</p>
        <div className='card-info'>
          <div>
            <p>Release year: {review.year}</p>
            <p>Rank: {review.rank}</p>
            <p>Average: {review.average}</p>
            {/* <p>Bayesian average: {review.bayesAverage.toFixed(2)}</p> */}
            {/* <p>Users rated: {review.usersRated}</p> */}
          </div>
          <img src={review.thumbnail} alt='thumbnail' />
        </div>
      </div>
    </Link>
  )
}

export default BoardGameCard
