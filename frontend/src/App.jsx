import React, { useState } from 'react'

const App = () => {
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")

  async function handleSubmit() {
    try {

      const res = await fetch("http://127.0.0.1:5000/greet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message
        })
      })

      const rep = await res.json()

      setResponse(rep)

    } catch (err) {
      alert(err)
    }
  }

  return (
    <div>

      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleSubmit}>
        send
      </button>

      <h1>{JSON.stringify(response, null, 2)}</h1>

    </div>
  )
}

export default App