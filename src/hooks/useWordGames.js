
import  { useState, useEffect, useRef } from 'react'

function useWordGames(DURATION = 10) {
    
  const [textValue, setTextValue] = useState('')
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(DURATION)
  const [wordCount, setWordCount] = useState(0)
  const textAreaRef = useRef(null)
  
  const handleChange = event => {
    setTextValue(event.target.value)
    console.log(textValue)
  }
  
  function calculateWordCount (text) {
    const arrWord = text.trim().split(' ')
    return arrWord.filter(word => word !== '').length   
  }
  
  function endGame() {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(textValue)) 
  }
  
  function startClock() {
    setIsTimeRunning(true)
    setTimeRemaining(DURATION)
    setTextValue("")
    setWordCount(0)
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
  }
  
  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } 
    else if (timeRemaining === 0) {
          endGame()
    } 
   
  }, [timeRemaining, isTimeRunning]) // eslint-disable-line react-hooks/exhaustive-deps
  
  // useEffect(() => {
  //   setTimeRemaining(time => time - 1)
  //   setWordCount(0) 
  // }, [])  // <-- add this empty array here

  return [textAreaRef, textValue, isTimeRunning, timeRemaining, startClock, wordCount, handleChange];
}




export default useWordGames