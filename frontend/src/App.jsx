import React, { useState } from 'react'

const App = () => {

  const [prompt,setPrompt]=useState("")
  const [response,setResponse]=useState("")
  async function handleRequest(){
    const response = await fetch("",{
      method:"POST",
      body:prompt
    })

    const result = response.json()
    setResponse(result)
  }
  return (
    <div>
    <input type="text" onChange={(e)=>setPrompt(e.target.value)} />
    <button onClick={handleRequest}>send</button>
    <pre>
      {JSON.stringify(response,null,2)}
    </pre>

    </div>
  )
}

export default App