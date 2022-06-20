import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(["C2UPRehaejk","CnZmIwSQV7c","Cl618XVFKmc"]);
  const [video, setVideo] = useState("C2UPRehaejk");

  var x="https://www.youtube-nocookie.com/embed/"

  function handleRandom(){
    console.log("submit pressed")
    var number = Math.floor(Math.random() * (count.length))
    setVideo(count[number])
  }

  return (
    <div className="App">
        <iframe width="560" height="315" src={x + video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <button onClick={() => handleRandom()}>Submit</button>
    </div>
  )
}

export default App
