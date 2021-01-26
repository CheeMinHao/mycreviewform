import React from 'react'
import { createReview } from '../actions'
import ReviewForm from '../components/review'


const Home = () => {
  return (
    <div>

      <div className="form-main">
        <ReviewForm handleFormSubmit={createReview}/>
      </div>

      <div>

      </div>
  </div>
  )
} 

export default Home