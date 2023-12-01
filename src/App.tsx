import './App.css'
import { Data } from './components/Data/Data'
import { Loading } from './components/Loading/Loading'
import { Error } from './components/Error/Error'

function App() {

  return (
    <>
      <Data url={'http://localhost:7070/data'} />
      <Error url={'http://localhost:7070/error'} />
      <Loading url={'http://localhost:7070/loading'} />
    </>
  )
}

export default App
