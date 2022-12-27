
import './App.css';
import { useState, useEffect } from 'react'

function App() {

const [image, setimage] = useState([])
  useEffect(() => {

    var headersapi = {
      method: 'GET',
      
      Headers: {
        'Content-Type': 'application/json'
        
      },
    }


    const showpicture = async () => {
      var imageeData = await fetch('https://random-d.uk/api/random', headersapi)
        .then(Response =>
          Response.json())
        .then(data => {
          setimage(data)
        })
    }
    showpicture()
  })


  return (
    <div className="App">

      <img src={image.url}/>
             
    </div>
  );
}

export default App;
