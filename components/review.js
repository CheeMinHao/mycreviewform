import React, {useState} from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import fetch from 'isomorphic-unfetch'

const ReviewForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [purchase, setPurchase] = useState('')
  const [review, setReview] = useState('')
  const [img, setImg] = useState('')
  const [vid, setVid] = useState('')
  const [answer, setAnswer] = useState('')

  
  const submitForm = async e => {
    // e.preventDefault()
    try {
      const body = {name, email, purchase, answer, review, img, vid}
      const res = await fetch(`http://localhost:3000/api/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const data = await res.json()
    } catch (error) {
      console.error(error)
    }
  }

        return (
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label className="form-label" id="name" htmlFor="name">Full Name<span className="clue"> (as per IC)</span></label>
            <input
            onChange={e => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            name="name"
            className="texting"
            placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label className="form-label" id="email" htmlFor="email">Email</label>
            <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            className="texting"
            placeholder="Enter your email"
            name="email" required />
          </div>
          <div className="form-group">
            <label className="form-label" id="purchase" htmlFor="purchase">Date of Purchase</label>
            <input
            onChange={e => setPurchase(e.target.value)}
            value={purchase}
            type="date"
            id="purchase"
            className="date-text"
            name="purchase" required />
          </div>
          <div className="form-group">
            <p className="form-label" id="radio1">Radio Button Question</p>
            <label className="form-label" id="answer" htmlFor="answer">
            <input
            id="answer"
            value="answer1"
            name="answer"
            type="radio"
            className="input-radio"
            onChange={e => setAnswer(e.target.value)} />Answer 1</label>
            <label className="form-label" id="answer" htmlFor="answer">
            <input
            id="answer"
            value="answer2"
            name="answer"
            type="radio"
            className="input-radio"
            onChange={e => setAnswer(e.target.value)} />Answer 2</label>
            <label className="form-label" id="answer" htmlFor="answer">
            <input
            id="answer"
            value="answer3"
            name="answer"
            type="radio"
            className="input-radio"
            onChange={e => setAnswer(e.target.value)} />Answer 3</label>
            <label className="form-label" id="answer" htmlFor="answer">
            <input
            id="answer"
            value="answer4"
            name="answer"
            type="radio"
            className="input-radio"
            onChange={e => setAnswer(e.target.value)} />Answer 4</label>
          </div>
          <div className="form-group">
            <label className="form-label" id="review" htmlFor="review">Product Review</label>
            <TextareaAutosize
            onChange={e => setReview(e.target.value)}
            value={review}
            id="review"
            name="review"
            className="input-textarea"
            placeholder="Make your review here"
            required />
          </div>
          <div className="form-group">
            <label className="form-label" id="img" htmlFor="img">Image Upload</label>
            <input
            onChange={e => setImg(e.target.value)}
            value={img}
            type="text"
            placeholder="Insert Link Here"
            className="texting"
            id="img"
            name="img" />
          </div>
          <div className="form-group">
            <label className="form-label" id="vid" htmlFor="vid">Video Upload</label>
            <input
            onChange={e => setVid(e.target.value)}
            value={vid}
            type="text"
            id="vid"
            name="vid"
            placeholder="Insert Link Here"
            className="texting" />
          </div>
          <div>
            <input type="submit" id="submit" className="button1" value="Submit" />
          </div>
        </form>
        )
    }



export default ReviewForm