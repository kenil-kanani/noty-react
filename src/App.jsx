import { useReducer } from 'react'
import './App.css'
import { NotyStack } from './Coponents'
import NotyReducer from './reducers/NotyReducer'
import NotyContext from './context/NotyContext'

function App() {

  const [stack, notyDispatch] = useReducer(NotyReducer, [])

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <NotyContext.Provider value={{ stack, notyDispatch }} >
        <NotyStack />
      </NotyContext.Provider>
    </div>
  )
}

export default App
