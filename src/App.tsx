import { useContext } from "react"
import CounterV2 from "./components/CounterV2"
import { CounterContext } from "./context/counterV2"
import Eitems from "./components/Eitems"
import Ecart from "./components/Ecart"


function App() {

  const counterState = useContext(CounterContext)

  console.log(counterState?.counter)

  return (
    <>
      <h1>Count Number {counterState?.counter}</h1>
      <CounterV2 />

      <hr />

      <div style={{display: 'flex', gap: 10}}>
        <div style={{width: '50%'}}>
          
          <Eitems name="Mackbook pro" price={1100} />
          <Eitems name="Smasung Mobile" price={700} />
          <Eitems name="Dell laptop" price={1000} />
        </div>


        <div style={{width: '50%'}}>
          <Ecart />
        </div>
      </div>


    </>
  )
}

export default App
