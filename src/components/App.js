import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleDoubleClick = (event) =>{
    console.log("I was double clicked");
  
  }
  const handleClick = (event) =>{
    console.log("I was not double clicked");
  }
  return (
    <div id="main">
      <button id="dblclick-btn" onDoubleClick={handleDoubleClick} onClick={handleClick}>Double click me</button>
    </div>
  )
}


export default App;
