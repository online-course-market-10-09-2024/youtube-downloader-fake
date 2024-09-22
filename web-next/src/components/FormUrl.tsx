"use client"

import { useState } from "react"

export default function FormAddUrl(): JSX.Element {
  const [inputUrl, setInputUrl] = useState<string>("Add Youtube Url")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(event.target.value)
  }

  return (
    <form className="flex flex-col gap-y-5">
      <div className="mx-auto fit-content flex gap-x-5">
        <input className="border-2 px-2" type="text" value={inputUrl} onChange={handleInputChange}/>
        <button className="px-8 py-2 bg-gray-500 text-white" >Add URL</button>
      </div>

      <button className="mx-auto fit-content px-5 py-2 bg-green-500 text-white">Start download!</button>
    </form>
  )
}