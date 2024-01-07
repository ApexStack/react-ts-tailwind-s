import React, { useEffect, useState }  from 'react'

const App = () => {
  const [data, setData] = useState<null | string>(null);

  useEffect(() => {
    fetchDataFromServer();
  }, [])

  const fetchDataFromServer = async () => {
    try {
      const response = await fetch('http://localhost:3000');
      const json: string = await response.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-[900px] mx-auto px-14 py-8">
      <header className="text-center mb-14">
        <h1 className="text-5xl font-bold mb-5">Reactive Forge</h1>
        <p className="text-lg">
          Simplifying React bundling for an optimized development experience.
        </p>
      </header>

      <h2 className='text-yellow-500 text-center'>{ data ? data : 'Fetching data from the server!'}</h2>

      <section className="flex justify-between">
        <div className="flex-1 py-5">
          <h2 className="text-4xl font-bold mb-5">Key Features</h2>
          <ul className="list-none p-0 m-0 flex flex-col">
            <li className='text-lg'>Efficient bundling of React apps</li>
            <li className='text-lg'>Performance optimization</li>
            <li className='text-lg'>Seamless development experience</li>
          </ul>
        </div>

        <div className="flex-1 py-5">
          <h2 className="text-4xl font-bold mb-5">Additional Information</h2>
          <p className="text-lg">
            This space can contain more details, FAQs, or any other relevant information about Reactive Forge.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App