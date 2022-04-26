import Description from './components/Description'
import Clock from './components/Clock/Clock'
import Greetings from './components/Greetings'
import './index.css'
import Actiontext from './components/ActionText'

function App() {
  return (
    <div className="flex justify-center h-screen">
      <section className="flex flex-col bg-white">
        <Description />
        <Actiontext />
        <Clock />
        <Greetings />
      </section>
    </div>
  )
}

export default App
