import React, { useState } from "react"

const App = () => {

  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState(null)

  async function handleRequest() {
    try {

      const res = await fetch("http://127.0.0.1:5000/", {
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
    <div>

      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={handleRequest}>
        Send
      </button>

      <pre>
        {JSON.stringify(response, null, 2)}
      </pre>

    </div>
  )
}

export default App