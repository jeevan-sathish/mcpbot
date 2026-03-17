import React, { useState } from 'react'

const App = () => {
  const [file,setFile]=useState(null)
  const [message,setMessage]=useState("")
  
  const handleSubmit =async ()=>{
    const formData = new FormData()
    formData.append("file",file)

    const response = await fetch("http://127.0.0.1:5000/upload",{
      method:"POST",
      body:formData
    })

    const rep =await response.json()
    setMessage(rep)


  }
    
  return (
    <div>
    <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
    <button onClick={handleSubmit}>submit</button>
    <h1>{JSON.stringify(message,null,2)}</h1>

    </div>
  )
}

export default App