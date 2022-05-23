import './index.css'
import { useState, useContext, useEffect } from 'react'
import Description from '@components/Main/Description'
import Timer from '@components/Main/Timer'
import Greetings from '@components/Main/Greetings'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import StartupModal from './components/UI/Modals/StartupModal'
import SettingsContext from '@store/Settings'
import { applyTheme } from '@utils/settings'

function App() {
  const [isFinished, setIsFinished] = useState(false)
  const settings = useContext(SettingsContext)
  const [isFirstLoad, setIsFirstLoad] = useState(settings.data.isFirstLoad)

  const handleInitialSettings = (data) => {
    setIsFirstLoad(false)
    settings.handleApply({ ...data, isFirstLoad: false })
  }

  useEffect(() => {
    applyTheme(settings.data.theme)
  }, [settings.data.theme])

  return (
    <div className="flex h-screen flex-col bg-white text-slate-600 dark:bg-zinc-900 dark:text-gray-400">
      <Header />
      <main className="mb-auto flex flex-col">
        <Description />
        {!isFinished && !isFirstLoad && <Timer onFinish={setIsFinished} />}
        {isFinished && <Greetings />}
        {isFirstLoad && (
          <StartupModal
            onApply={handleInitialSettings}
            settings={settings.data}
            title="Please choose"
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
