import './App.css'
import ContextProvider from "./Context/ContextProvider"
import MatrixRouter from './Routes/MatrixRouter'

function App() {

  return (
    <>
      <ContextProvider>
        <MatrixRouter />
      </ContextProvider>
    </>
  )
}

export default App
