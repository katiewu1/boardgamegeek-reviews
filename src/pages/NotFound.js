import React from 'react'
import { useLocation } from 'react-router-dom'
import Lottie from 'react-lottie'
import animationData from '../lotties/notFound'

const NotFound = () => {
  // useLocation - take the passed data (from state) when navigating
  const { state } = useLocation()
  const { message } = state

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className='lottie'>
      <Lottie options={defaultOptions} height={200} width={200} />
      {/* display the error message when res.json success is: false, or error */}
      <p style={{ fontStyle: 'italic' }}>{message.toUpperCase()}...</p>
    </div>
  )
}

export default NotFound
