import React, { useContext } from 'react'
import './App.css'
import va from "./assets/Ai.png"
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';
import speakimg from "./assets/speak.gif"
import aigif from "./assets/aiVoice.gif"
function App() {
 let {recognition,speaking,setSpeaking,prompt,response,setPrompt,setResponse}=  useContext(datacontext)

  return (
    <div className='main'>
      <img src={va} alt="" id="aparn"></img>
      <span>Hii, I'm Aparn.</span>
      {!speaking? 
      <button onClick={()=>{
        setPrompt("listening...")
        setSpeaking(true)
        setResponse(false)
        recognition.start()
      }
      }>Click Here <CiMicrophoneOn /></button>:
      <div className="response">
        {!response?
        <img src={speakimg} alt="" id="speak"></img>:
          <img src={aigif} alt="" id="aigif"></img>}
          <p>{prompt}</p>
      </div>}
     
     
    </div>
  )
}
export default App