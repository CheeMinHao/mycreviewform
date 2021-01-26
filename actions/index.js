import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const createReview = (review) => {

    movie.id = Math.random().toString(36).substr(2, 5)

    return axios.post(`${BASE_URL}/api/v1/review`, review).then(res => res.data)
}