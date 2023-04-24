import { useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
  const [favLinks, setfavLinks] = useState([]);

  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    const newfavLinks = [...favLinks]
    newfavLinks.splice(index,1)
    setfavLinks(newfavLinks)
  }

  const handleSubmit = (URL) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
    const newfavLinks = [...favLinks]
    newfavLinks.push(URL)
    setfavLinks(newfavLinks)
  }

  return (
    <div>
      <h1 style={{marginLeft:'200px'}}>My Favorite Links</h1>
      <p style={{marginLeft:'200px'}}>Add a new url with a name and link to the table.</p>
          <Table removeLink={handleRemove} linkData={favLinks}/>
      <br />
      <h3 style={{marginLeft:'200px'}}>Add New</h3>    
        <Form handleSubmit={handleSubmit}/>
    </div>
  )
}


export default LinkContainer
