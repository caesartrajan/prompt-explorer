"use client"

// Next, React
import { useState } from "react"

// import Prompt from '../../../components/prompt'

export default function HistoricalFigures () {
  const [person, setPerson] = useState("Napoleon Bonaparte")
  const [topic, setTopic] = useState("Growing up in Corsica")

  // UX states
  const [isEmpty, setIsEmpty] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState("")

  const promptSeeker = async (e) => {
    e.preventDefault()

    // Turn loading on
    setIsEmpty(false)
    setIsLoading(true)

    let promptPrimitive = `Use these examples to help me craft a prompt to start a one-on-one conversation with a historical figure about a given topic. In your response, don't include the first lines that list the Historical figure and Topic. Examples: "Historical figure: Genghis Khan. Topic: Discipline among soldiers Output: Genghis Khan, you are the fearsome leader of the Mongols and founder of one of the greatest empires known to humankind. How are you able to maintain discipline and order in your army despite how far they must travel and spread out? Historical figure: Albert Einstein. Topic: Theory of relativity. Output: Mr. Einstein, thank you for your time. If it's not too much trouble, would you mind telling me about your Theory of Relativity -- how it works, how you came up with the concept, and what you think about it now? Historical figure: ${person}. Topic: ${topic}. Output:`


    console.log('prompt is:')
    console.log(promptPrimitive)

    const response = await fetch("/api/openai", {
      method: "GET",
      headers: {
        'mode': 'cors',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'userPrompt': promptPrimitive
      }
    });

    const data = await response.text()

    // Set states
    setResponse(data)
    setIsLoading(false)
  }

  return(
    <main className="p-12">
      {/* <Prompt mainField={`Who do you want to talk to?`}/> */}
      <div className="prompt-writer-wrapper grid grid-cols-5 gap-16 w-full p-16">
        <form className="col-span-2" onSubmit={promptSeeker}>
          <div className="text-fields-wrapper flex flex-col gap-4">
            <div className="text-field flex flex-col gap-2">
              <label htmlFor="historical-figure">Who do you want to talk to?</label>
              <input className="text-zinc-500 bg-zinc-800 w-full p-4 rounded-lg" type="text" placeholder={person} onChange={({target}) => setPerson(target.value)} name="historical-figure" id="historical-figure" required />
            </div>
            <div className="text-field flex flex-col gap-2">
              <label htmlFor="topic">What do you want to talk about?</label>
              <input className="text-zinc-500 bg-zinc-800 w-full p-4 rounded-lg" type="text" placeholder={topic} onChange={({target}) => setTopic(target.value)} name="topic" id="topic" required />
            </div>
          </div>
          <button>Generate</button>
        </form>
        <div className="prompt col-span-3 w-full">
          <input className="text-zinc-500 bg-zinc-800 w-full p-4 rounded-lg" type="text" value={ response ? response : "wait"}></input>
        </div>
      </div>
    </main>
  )
}