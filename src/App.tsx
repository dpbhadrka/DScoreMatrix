import './App.css'
import Header from './Components/Header/Header'
import ContextProvider from "./Context/ContextProvider"

function App() {

  return (
    <>
      <ContextProvider>
        <Header />
      </ContextProvider>
    </>
  )
}

export default App
