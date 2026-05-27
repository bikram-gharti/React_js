import {useState} from 'react'
import { RiCloseCircleFill } from "@remixicon/react";

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('') 
  const [notes, setNotes] = useState([]) 
  const submitHandler = (e) => {
    e.preventDefault()
    setTitle('')
    setDetails('')
    const copyNotes = [...notes]
    copyNotes.push({title, details})
    setNotes(copyNotes)
  }

  const removeNote = (index) => {
    const copyNotes = [...notes]
    copyNotes.splice(index, 1)
    setNotes(copyNotes)
  }

  return (
    <>
      <div className="container p-4 mx-auto bg-black text-white lg:flex gap-8">
        <form onSubmit={(e) => submitHandler(e)}
        className="flex flex-col gap-4 lg:w-1/4 lg:mt-8 lg:pt-8 ">
          <h3 className="text-2xl font-bold mb-4">Add a Note</h3>
          <input 
          type="text" 
          placeholder="Enter a title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-white rounded py-4 px-4 focus:outline-none"
          />
          

          <textarea 
          placeholder="Enter a details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="border border-white rounded py-4 px-4 focus:outline-none h-40 resize-none"
          ></textarea>

          <button 
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded active:scale-90 transition-transform duration-200"
          >
            Add Note
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:pl-8 md:pl-8 mt-8  border-t-2 lg:border-l-2 lg:border-t-0 border-gray-300 pt-4 overflow-y-auto h-150 md:h-240 lg:h-screen lg:w-3/4">
          {notes.map((note, index) => (
            <div key={index} className="rounded p-4 pt-20 w-55 h-70 bg-[url('./assets/note.png')] bg-cover bg-center">
              <RiCloseCircleFill onClick={() => removeNote(index)} className='text-red-500 float-right cursor-pointer' />
              <h2 className="text-xl text-black font-bold mb-2">{note.title}</h2>
              <p className="text-gray-700">{note.details}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
