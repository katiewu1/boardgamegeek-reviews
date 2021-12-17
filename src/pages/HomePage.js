import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className='homepage'>
        <p>
          Website built in React using React Router to test my Mongo-backend API
          with Mongoose and node.js Express.
        </p>
        <p>GitHub links:</p>
        <div className='homepage-links-container'>
          <a
            href='https://github.com/katiewu1/project-mongo-api'
            target='_blank'
            rel='noreferrer noopener'
          >
            project-mongo-api
          </a>
          <a
            href='https://github.com/katiewu1/boardgamegeek-reviews'
            target='_blank'
            rel='noreferrer noopener'
          >
            boardgamegeek-reviews
          </a>
        </div>
      </div>
    </>
  )
}

export default HomePage
