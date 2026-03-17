import React, { useState } from 'react'; 
import { GoogleGenerativeAI } from "@google/generative-ai"; 
 
const Gen = () => { 
    const [response, setResponse] = useState(""); 
 
    const generateContent = async () => { 
        const genAI = new GoogleGenerativeAI("AIzaSyAznhOhBnpvhfDiROZ9Ecw1EjXwwsubw-4"); 
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); 
 
        const prompt = "10 questions axked by hr in interview"; 
        const result = await model.generateContent(prompt); 
        setResponse(result.response.text()); 
    }; 
 
    return ( 
        <div> 
            <button onClick={generateContent}>Generate Content</button> 
            {!response?(<p>.....loading please have patience</p>):(<p>{response}</p>)} 
             
        </div> 
    ); 
}; 
 
export default Gen;