"use client"

// Next, React
import { useState } from "react"

export default function Prompt() {
  // Prompt elements
  const [persona, setPersona] = useState("")
  const [response, setResponse] = useState("")

  // UX states
  const [isEmpty, setIsEmpty] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const promptSeeker = async (e) => {
    e.preventDefault()

    // Turn loading on
    setIsEmpty(false)
    setIsLoading(true)

    // const receivedData = props.userInput;

    // const promptPrimitive = {prompt}
      // `Use these examples to help me craft a prompt to learn about ${persona}. In your response, don't include the first line that lists the persona.
      
      // Examples:
    
      // Input: endocrinologist
      // Output: I want to learn about endocrinology. Please assume you're an authority of endocrinology and have agreed to meet me for coffee to discuss the nature and history of the discipline. Explain to me the basics of the endocrine system and your role as a health care specialist in your field.
      
      // Input: pianist
      // Output: I want to become a pianist. Let's imagine that you are an accomplished concert pianist with decades of experience under your belt. Tell me about the profession and what it takes to excel in your field.
      
      // Input: ${persona}
      // Output:`

    const response = await fetch("/api/openai", {
      method: "GET",
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'userprompt': 'what is the answer to the meaning of life?'
      }
    });
    
    const data = await response.text()

    // Set states
    setResponse(data)
    setIsLoading(false)
    }
    

  return (
    <>
       <form onSubmit={promptSeeker}>
        <label>shit</label>
        <input
          type="text"
          className="bg-zinc-800"
          value={persona}
          onChange={(event) => {
            setPersona(event.target.value);
          }}
        />
        <button type="submit">Create Prompt</button>
      </form>
      {
        isEmpty ? <p>enter prompt specifics above</p> : isLoading ? <p>loading</p> : <p>{response}</p>
      }
    </>
  )
}