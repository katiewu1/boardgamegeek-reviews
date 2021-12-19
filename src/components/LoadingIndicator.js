import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/loading'

const LoadingIndicator = () => {
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
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        style={{ backgroundColor: '#ffa36c', borderRadius: '20%' }}
      />
      <p>LOADING...</p>
    </div>
  )
}

export default LoadingIndicator
