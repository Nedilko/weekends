import { useEffect, useState } from 'react'
import getTimeLeft from './utils/getTimeLeft'
import './index.css'

import Description from './components/Description'
import Clock from './components/Clock/Clock'
import Greetings from './components/Greetings'
import Actiontext from './components/ActionText'

function App() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center h-screen">
      <section className="flex flex-col bg-white">
        <Description />
        <Actiontext />
        <Clock time={time} />
        <Greetings />
      </section>
    </div>
  )
}

export default App
