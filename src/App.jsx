import React from 'react'
import starLogo from './assets/logo.png'
import Films from './components/Films'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
          <img src={starLogo} className="logo" alt="Star Wars logo" />
       </div> 
    <Films />
    </div>
  )
}

export default App
