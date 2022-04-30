import './index.css'

import { useState } from 'react'
import Description from './components/Main/Description'
import Greetings from './components/Main/Greetings'
import Actiontext from './components/Main/ActionText'
import Timer from './components/Main/Timer'
import Header from './components/Header/Header'
// import { getSettings } from './utils/settings'

function App() {
  const [isFinished, setIsFinished] = useState(false)
  // const [settings, setSettigns] = useState(getSettings())

  return (
    <>
      <Header />
      <div className="flex justify-center h-screen bg-white dark:bg-zinc-900">
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
