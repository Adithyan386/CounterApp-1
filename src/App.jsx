import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <>
     <div className="size-full flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="w-full max-w-md mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-10" id='con'>

          <div className="text-center">
            <h1 className="text-2xl text-gray-700 tracking-wide">Counter</h1>
          </div>


          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl py-16 px-8 text-center shadow-inner">
            <div className="text-8xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {count}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <button
              onClick={decrement}
              className="bg-gradient-to-br from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white rounded-2xl py-6 text-4xl font-semibold shadow-lg transition-all duration-200 active:scale-95 hover:shadow-xl"
            >
              −
            </button>


            <button
              onClick={increment}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-2xl py-6 text-4xl font-semibold shadow-lg transition-all duration-200 active:scale-95 hover:shadow-xl"
            >
              +
            </button>
          </div>

    
          <div className="pt-2">
            <button
              onClick={reset}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-2xl py-4 font-medium shadow-md transition-all duration-200 active:scale-95 hover:shadow-lg"
            >
              Reset
            </button>
          </div>
        </div>


        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">Tap the buttons to count</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
