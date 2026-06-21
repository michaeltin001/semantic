import { useState, useEffect } from 'react'
import LandingPage from './LandingPage'
import ScenariosPage from './ScenariosPage'
import VoiceTestPage from './pages/VoiceTestPage'
import CharacterStoryPopup from './CharacterStoryPopup'
import CompletionScreen from './CompletionScreen'
import { COUNTRIES, SCENARIOS_BY_COUNTRY, UNLOCK_COST, REWARD_TOKENS } from './gameData'

const STARTING_TOKENS = 100

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [activeScenario, setActiveScenario] = useState(null)
  const [hash, setHash] = useState(window.location.hash)
  const [tokens, setTokens] = useState(STARTING_TOKENS)
  const [unlockedCountries, setUnlockedCountries] = useState(['China'])
  const [glowCountry, setGlowCountry] = useState(null)
  const [progressByCountry, setProgressByCountry] = useState({})
  const [storySeen, setStorySeen] = useState([])
  const [completionCountry, setCompletionCountry] = useState(null)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (hash === '#test') {
    return <VoiceTestPage />
  }

  function getProgress(country) {
    const scenarios = SCENARIOS_BY_COUNTRY[country] ?? []
    return progressByCountry[country] ?? scenarios.map(() => 0)
  }

  function handleUnlockCountry(country) {
    setTokens((t) => t - UNLOCK_COST)
    setUnlockedCountries((list) => (list.includes(country.name) ? list : [...list, country.name]))
  }

  function handleSelectCountry(countryName) {
    setGlowCountry((current) => (current === countryName ? null : current))
    setSelectedCountry(countryName)
  }

  function handleDismissStory(countryName) {
    setStorySeen((seen) => [...seen, countryName])
  }

  function handleFinishScenario() {
    const country = selectedCountry
    const scenario = activeScenario
    setActiveScenario(null)
    if (!country || !scenario) return

    const scenarios = SCENARIOS_BY_COUNTRY[country] ?? []
    const index = scenarios.findIndex((s) => s.id === scenario.id)
    if (index === -1) return

    const updated = getProgress(country).map((p, i) => (i === index ? 100 : p))
    setProgressByCountry((map) => ({ ...map, [country]: updated }))

    if (scenarios.length > 0 && updated.every((p) => p >= 100)) {
      setCompletionCountry(country)
    }
  }

  function handleDismissCompletion() {
    setCompletionCountry(null)
    setSelectedCountry(null)
    setTokens((t) => t + REWARD_TOKENS)
    const nextCountry = COUNTRIES.find((c) => !unlockedCountries.includes(c.name))
    if (nextCountry) setGlowCountry(nextCountry.name)
  }

  if (completionCountry) {
    const flag = COUNTRIES.find((c) => c.name === completionCountry)?.flag ?? ''
    return (
      <CompletionScreen
        country={completionCountry}
        flag={flag}
        onReturn={handleDismissCompletion}
      />
    )
  }

  if (activeScenario) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 bg-[#0F1418] text-white font-sans animate-fade-in-up">
        <h1 className="font-display text-2xl font-extrabold text-center px-6">
          Starting "{activeScenario.title}" — gameplay coming soon
        </h1>
        <button
          type="button"
          onClick={handleFinishScenario}
          className="px-4 py-2.5 rounded-2xl bg-[#1F2937] hover:bg-[#28323c] border-2 border-[#37464F] border-b-4 active:border-b-2 active:translate-y-0.5 transition-all font-display font-extrabold text-gray-400"
        >
          Back to scenarios
        </button>
      </div>
    )
  }

  if (selectedCountry && !storySeen.includes(selectedCountry)) {
    return (
      <CharacterStoryPopup
        country={selectedCountry}
        onBeginMission={() => handleDismissStory(selectedCountry)}
      />
    )
  }

  if (selectedCountry) {
    const flag = COUNTRIES.find((c) => c.name === selectedCountry)?.flag ?? ''
    return (
      <ScenariosPage
        country={selectedCountry}
        flag={flag}
        progress={getProgress(selectedCountry)}
        onBack={() => setSelectedCountry(null)}
        onScenarioStart={(scenario) => setActiveScenario(scenario)}
      />
    )
  }

  return (
    <LandingPage
      tokens={tokens}
      unlockedCountries={unlockedCountries}
      glowCountry={glowCountry}
      onUnlockCountry={handleUnlockCountry}
      onCountrySelect={handleSelectCountry}
    />
  )
}

export default App
