import './index.css'
import { useState, useEffect } from 'react'
import Description from '@components/Main/Description'
import Timer from '@components/Main/Timer'
import Greetings from '@components/Main/Greetings'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import StartupModal from './components/UI/Modals/StartupModal'
import { useSettingsData, useSettingsDispatch } from '@store/Settings'
import { applyTheme } from '@utils/settings'

function App() {
  const [isFinished, setIsFinished] = useState(false)
  const settings = useSettingsData()
  const dispatch = useSettingsDispatch()
  const [isFirstLoad, setIsFirstLoad] = useState(settings.isFirstLoad)

  const handleInitialSettings = (data) => {
    setIsFirstLoad(false)
    dispatch({
      type: 'set',
      payload: { ...data, isFirstLoad: false },
    })
  }

  useEffect(() => {
    applyTheme(settings.theme)
  }, [settings.theme])

  return (
    <div className="flex h-screen flex-col bg-white text-slate-600 dark:bg-zinc-900 dark:text-gray-400">
      <Header />
      <main className="mb-auto flex flex-col">
        <Description />
        {!isFinished && !isFirstLoad && <Timer onFinish={setIsFinished} />}
        {isFinished && <Greetings text={settings.greetingsText} />}
        {isFirstLoad && (
          <StartupModal
            onApply={handleInitialSettings}
            settings={settings}
            title="Please choose"
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
