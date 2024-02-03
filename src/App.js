import './App.css';
import first from './assets/first.gif'
import second from './assets/second.gif'
import React from 'react'

function App() {
  const [myText, setMyText] = React.useState("Will you be my valentine?")
  const [changeImg, setChangeImage] = React.useState(false)
  const [hideButton, setHideButton] = React.useState(false)

  function handleHover(e) {
    var left = ((Math.random() * 800) -400)
    var top= ((Math.random() * 300) - 150)

    while(left > -200 && left < 100)
    {
      left = ((Math.random() * 800) - 400)
    }

    e.target.style.top = top + "px"
    e.target.style.left = left + "px"
  }

  function handleClick(e) {
    setMyText('YAYYYYY!!')
    setChangeImage(true)
    setHideButton(true)
  }

  return (
    <div className='mainDiv'>
      <div>
        <img className='firstPic' src={!changeImg ? first : second} alt='valentine?' />
        <h3>{myText}</h3>
        <div>
            <button hidden={hideButton} className='yesButton' onClick={handleClick}>Yes</button>
            <button hidden={hideButton} onMouseOver={handleHover} className='noButton'>No</button>
        </div>
      </div>
    </div>
  )
}

export default App;
