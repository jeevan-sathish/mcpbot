import React, { useState } from "react"

const App = () => {

  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState(null)

  async function handleRequest() {
    try {

      const res = await fetch("http://127.0.0.1:5000/res", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: prompt
        })
      })

      const result = await res.json()

      setResponse(result)

    } catch (err) {
      console.log("error:", err)
    } finally {
      console.log("run successfully")
    }
  }

  return (
    <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center", flexDirection:"column"}}>

      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={handleRequest}>
        Send
      </button>

      <div style={{width:"1000px",height:"auto", padding:"10px"}}>
        {JSON.stringify(response, null, 2)}
      </div>

    </div>
  )
}

export default App