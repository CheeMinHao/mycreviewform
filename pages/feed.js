import prisma from '../lib/prisma'
import { useEffect } from 'react';


export async function getStaticProps() {
  const reviews = await prisma.review_form.findMany({
      
  });
  
  return {
    props: {
      reviews
    }
  }
}

const Review = ({reviews}) => {

  const renderImg = (img) => {
    useEffect(() => {
      return base64ToFile(img)
    })
  }

  const renderReview = (reviews) => {
    return reviews.map(review => 
      <li key={review.id}>
          <p>{review.name}</p>
          <p>{review.purchase}</p>
          <img id="image" src={review.img} />
      </li>
  )
  }

  return (
    <>
      <ul>
        {renderReview(reviews)}
      </ul>
    </>
  )
}

export default Review;