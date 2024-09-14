import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <div class="h-screen flex justify-center items-center bg-gray-100">
      <form
        action="/"
        method="get"
        class="inline-block justify-center items-center max-w-md w-full bg-white rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 class="text-3xl font-bold mb-4">Login</h2>
        <label for="cardNumber" class="block mb-2">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          class="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <br /><br />
        <label for="pin" class="block mb-2">PIN:</label>
        <input
          type="password"
          id="pin"
          name="pin"
          class="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <br /><br />
        <div class="place-items-center">
          <input
            type="submit"
            value="Login"
            class="bg-carribean-primary hover:bg-green-950 text-white font-bold py-2 px-4 rounded"
          />
        </div>
      </form>
      <div></div>
    </div>
    </div>
  )
}

export default App
