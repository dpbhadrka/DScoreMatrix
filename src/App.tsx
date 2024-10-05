import './App.css'
import Header from './Components/Header/Header'
import ContextProvider from "./Context/ContextProvider"
import InitialForm from './Sections/InitialForm/InitialForm'

function App() {

  return (
    <>
      <ContextProvider>
        <Header />
        <InitialForm />
      </ContextProvider>
    </>
  )
}

export default App
