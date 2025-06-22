import { useState } from 'react'
import './App.css'
import Acceuil from './assets/Acceuil'
import Frappes from './assets/Frappes'

function App() {
  const [next, setNext] = useState(false)

  return (
    <>
      {next ? <Frappes /> : <Acceuil setNext={setNext} />}
    </>
  )
}

export default App
