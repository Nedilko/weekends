import './index.css'
import { useState } from 'react'
import Description from '@components/Main/Description'
import Timer from '@components/Main/Timer'
import Greetings from '@components/Main/Greetings'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'

function App() {
  const [isFinished, setIsFinished] = useState(false)

  return (
    <div className="flex h-screen flex-col bg-white text-slate-600 dark:bg-zinc-900 dark:text-gray-400">
      <Header />
      <main className="mb-auto flex flex-col">
        <Description />
        {!isFinished && <Timer onFinish={setIsFinished} />}
        {isFinished && <Greetings />}
      </main>
      <Footer />
    </div>
  )
}

export default App
