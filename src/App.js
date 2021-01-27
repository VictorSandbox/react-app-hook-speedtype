import React from 'react'
import wordGames from './hooks/useWordGames'
import './App.css'

function App () {

 const [textAreaRef, textValue,isTimeRunning,timeRemaining,startClock,wordCount,handleChange] = wordGames(10)

  return (
    <div className='App'>
      <h1>How fast do you type? </h1>
      <textarea
        ref= {textAreaRef}
        id='noter-text-area'
        name='textarea'
        value={textValue}
        disabled={!isTimeRunning}
        onChange={handleChange}
      ></textarea>

      <h4>Time Remaining: {timeRemaining}</h4>
      {/* () => calculateWordCount(textValue) */}

      <button  disabled={isTimeRunning} onClick={startClock}>Start</button>
      {/* <Button disabled={true}>Disabled Button </Button> */}
  <h1>Word Count:{wordCount}</h1>
    </div>
  )
}

export default App

// https://hub.packtpub.com/getting-started-with-react-hooks-by-building-a-counter-with-usestate-and-useeffect/
//https://stackoverflow.com/questions/33245017/react-modifying-textarea-values
// https://stackoverflow.com/questions/18679576/counting-words-in-string
// https://frontarm.com/james-k-nelson/when-to-use-arrow-functions/ - this?

// https://frontarm.com/courses/async-javascript/promises/why-async/  - courses

// https://flaviocopes.com/javascript-functions-vs-arrow-functions/
// https://www.robinwieruch.de/react-event-handler

// https://alligator.io/react/event-handling/

// https://daveceddia.com/courses/
// https://daveceddia.com/useeffect-hook-examples/
