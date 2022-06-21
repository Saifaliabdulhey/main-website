import React from 'react'
import loader from '../images/loading.gif'

function LoadingPage() {
  return (
    <div className="loader">
    <img className="loader__image" src={loader} />
    </div>
  )
}

export default LoadingPage