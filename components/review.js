import {useState} from 'react'
import TextareaAutosize from 'react-autosize-textarea'

const ReviewForm = (props) => {

    const [form, setForm] = useState({
      name: '',
      email: '',
      purchase: '',
      review: '',
      img: '',
      vid: ''
    })

    const handleChange = (event) => {
      const target = event.target
      const name = target.name

      setForm({
        ...form,
        [name]: target.value
      })
    }

    const submitForm = () => {
      props.handleFormSubmit({...form})
    }

        return (
        <form>
          <div className="form-group">
            <label className="form-label" id="name" htmlFor="name">Full Name<span className="clue"> (as per IC)</span></label>
            <input
            onChange={handleChange}
            value={form.name}
            type="text"
            id="name"
            name="name"
            className="texting"
            placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label className="form-label" id="email" htmlFor="email">Email</label>
            <input
            onChange={handleChange}
            value={form.email}
            type="text"
            id="email"
            className="texting"
            placeholder="Enter your email"
            name="email" required />
          </div>
          <div className="form-group">
            <label className="form-label" id="purchase" htmlFor="purchase">Date of Purhcase</label>
            <input
            onChange={handleChange}
            value={form.purchase}
            type="date"
            id="purchase"
            className="date-text"
            name="purchase" required />
          </div>
          <div className="form-group">
            <label className="form-label" id="review" htmlFor="review">Product Review</label>
            <TextareaAutosize
            onChange={handleChange}
            value={form.review}
            id="review"
            name="review"
            className="input-textarea"
            placeholder="Make your review here"
            required />
          </div>
          <div className="form-group">
            <label className="form-label" id="img" htmlFor="img">Image Upload</label>
            <input
            onChange={handleChange}
            value={form.img}
            type="text"
            placeholder="Insert Link Here"
            className="texting"
            id="img"
            name="img" />
          </div>
          <div className="form-group">
            <label className="form-label" id="vid" htmlFor="vid">Video Upload</label>
            <input
            onChange={handleChange}
            value={form.vid}
            type="text"
            id="vid"
            name="vid"
            placeholder="Insert Link Here"
            className="texting" />
          </div>
          <div>
            <button onClick={submitForm} type="submit" id="submit" className="button1">Submit</button>
          </div>
        </form>
        )
    }



export default ReviewForm