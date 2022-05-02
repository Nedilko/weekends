import './index.css'

import { useState } from 'react'
import Description from '@components/Main/Description'
import Greetings from '@components/Main/Greetings'
import Actiontext from '@components/Main/ActionText'
import Timer from '@components/Main/Timer'
import Header from '@components/Header/Header'

function App() {
  const [isFinished, setIsFinished] = useState(false)

  return (
    <>
      <Header />
      <main className="flex justify-center h-screen bg-white dark:bg-zinc-900">
        <section className="flex flex-col transition-all">
          <Description />
          {!isFinished && <Actiontext />}
          {!isFinished && <Timer isFinishedHandler={setIsFinished} />}
          {isFinished && <Greetings />}
        </section>
      </main>
    </>
  )
}

export default App
