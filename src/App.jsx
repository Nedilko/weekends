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
    <div className="flex flex-col h-screen text-slate-600 dark:text-gray-400 bg-white dark:bg-zinc-900">
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
