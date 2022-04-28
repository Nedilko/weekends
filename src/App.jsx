import './index.css'

import { useState } from 'react'
import Description from './components/Description'
import Greetings from './components/Greetings'
import Actiontext from './components/ActionText'
import Timer from './components/Timer'
import Header from './components/Header'

function App() {
  const [isFinished, setIsFinished] = useState(false)

  return (
    <>
      <Header />
      <div className="flex justify-center h-screen bg-white dark:bg-zinc-900 duration-300 ease-in-out">
        <section className="flex flex-col transition-all">
          <Description />
          {!isFinished && <Actiontext />}
          {!isFinished && <Timer isFinishedHandler={setIsFinished} />}
          {isFinished && <Greetings />}
        </section>
      </div>
    </>
  )
}

export default App
