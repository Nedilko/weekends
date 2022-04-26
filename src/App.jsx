import Greetings from './Greetings'
import Clock from './Clock'
import './index.css'

function App() {
  return (
    <div className="App">
      <section className="flex flex-col h-screen bg-white">
        <Greetings />
        <Clock />
      </section>
    </div>
  )
}

export default App
