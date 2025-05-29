// import { useCallback, useState, useEffect, useRef } from "react";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numAllowed, setNumAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");
//   //useCallback is a React Hook that lets you cache a function definition between re-renders.
//   // useCallback(function,dependencies);
//   //we use setPassword as a dependency bcoz using this functn mul times

//   //useRef hook
//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//      if (numAllowed) str += "0123456789";
//     if (charAllowed) str += "!@#$%^&*_-+=[]{}`~";
//     for (let i = 1; i <=length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }

//     setPassword(pass);

   
//   }, [length, numAllowed, charAllowed, passwordGenerator]);

//   return (
//     <>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700"></div>
//     </>
//   );
// }

// export default App;


// Import React Hooks
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // States to control password length, and whether numbers or special characters are allowed
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef to directly interact with the input element
  const passwordRef = useRef(null)

  // Function to generate the password
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // base string with letters

    // Add numbers and special characters if allowed
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    // Generate a random password of selected length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    // Set the generated password in state
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  // Function to copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    // Select the input field and copy its content
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useEffect to generate password whenever any option is changed
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      {/* Input field to display password and copy button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          Copy
        </button>
      </div>

      {/* Options section: slider for length, checkboxes for numbers & characters */}
      <div className='flex text-sm gap-x-2'>

        {/* Password length slider */}
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value)
            }}
          />
          <label>Length: {length}</label>
        </div>

        {/* Checkbox to allow numbers */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* Checkbox to allow special characters */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>

      </div>
    </div>
  )
}

export default App
