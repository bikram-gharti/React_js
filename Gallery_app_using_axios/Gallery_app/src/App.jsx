import React, { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = React.useState([]);
  const [index, setIndex] = React.useState(1);
  
  const getData = async () => {
    let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data);
  }

  let printUserData = <h3 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Loading...</h3>;
  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <a href={elem.url} key={idx} target="_blank" rel="noopener noreferrer">
        <div className='w-full overflow-hidden mx-auto'>
        <img src={elem.download_url} alt={elem.author} className="rounded-lg w-full h-52 object-cover" />
        <h3 className='mt-2 text-xl font-bold text-center'>{elem.author}</h3>
      </div>
      </a>
    })
  }

  useEffect(() => {
    getData();
  }, [index])

  return (
    <>
      <div className='min-h-[570px] overflow-hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12 mt-4 p-4 w-full'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-x-4 my-8'>
        <button onClick={() => {
          if (index>1) setIndex(index - 1)
          setUserData([]);
        }} className='bg-blue-500 text-white px-6 py-3 rounded-md'>Previous</button>
        <span className='text-xl px-6 py-3 font-bold'>Page {index}</span>
        <button onClick={() => {
          setIndex(index + 1)
          setUserData([]);
        }} className='bg-blue-500 text-white px-6 py-3 rounded-md'>Next</button>
      </div>
    </>
  )
}

export default App
