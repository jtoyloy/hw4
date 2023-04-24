import { useState, Component} from 'react'

const Form = (props) => {
  const [name, setName] = useState('')
  const [URL, setURL] = useState('')

  const handleURLChange = (event) => {
       console.log(event)
       setURL(event.target.value)
  }
  const handleNameChange = (event) => {
       console.log(event)
       setName(event.target.value)
  }


  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    props.handleSubmit(URL)
    setName('')
    setURL('')
  }

  return (
    <form style={{marginLeft:'200px'}} onSubmit={onFormSubmit}>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
      <label>
        Name:
        <input 
          type="text"
          id="name"
          name="name"
          onChange={handleURLChange}
          />
      </label>
      <label>
        URL:
        <input 
          type="text"
          id="URL"
          name="URL"
          onChange={handleURLChange}
          />
      </label>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default Form
