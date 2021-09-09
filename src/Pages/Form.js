import React, {useState} from 'react'

const Form = ({initialCat, handleSubmit, buttonLabel, history}) => {
    const [formData, setFormData] = useState(initialCat)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        history.push("/")
    }
    return (
        <form onSubmit ={handleSubmission}>
            <input
        type="text"
        onChange={handleChange}
        value={formData.name}
        name="name"
        className="formy"
        placeholder="What's in a name? That which we call a rose by any other name would smell as sweet"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.description}
        name="description"
        className="formy"
        placeholder="description of the cat"
      />
      <input 
      type="text"
      onChange={handleChange}
      value={formData.image}
      name="image"
      className="formy"
      placeholder="image url go here, cloudinary is best choice, my choice, favorite choice. JUST USE CLOUDINARY"
      />
      <input type="submit" value={buttonLabel} />
        </form>
    )
}

export default Form