import { useContext } from "react"
import CounterV2 from "./cxomponent/CounterV2"
import { CounterContext } from "./context/counterV2"


function App() {

  const counterState = useContext(CounterContext)

  console.log(counterState?.counter)

  return (
    <>
    <h1>Count Number {counterState?.counter}</h1>
      <CounterV2 />
    </>
  )
}

export default App
