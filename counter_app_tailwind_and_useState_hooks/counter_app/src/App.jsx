import { useState } from 'react';
const App = () => {
  const [num, setNum] = useState(0)
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-lg w-64 h-64 mt-10">
            <div className="flex justify-center items-center w-32 h-32 bg-blue-500 rounded-full mb-4">
                <div className="w-10 h-10 pl-4 pt-2 font-bold rounded-sm bg-white">{num}</div>
            </div>
            <div>
                <button onClick={() => setNum(num + 1)} className="ml-4 px-4 py-2 bg-green-500 text-white rounded">+</button>
                <button onClick={() => setNum(num - 1)} className="ml-4 px-4 py-2 bg-red-500 text-white rounded">-</button>
                <button onClick={() => setNum(0)} className="ml-4 px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
            </div>
        </div>
    </div>
  )
}

export default App
