import { useState, useEffect } from 'react'
import LandingPage from './LandingPage'
import ScenariosPage from './ScenariosPage'
import VoiceTestPage from './pages/VoiceTestPage'
import { UNLOCK_COST } from './gameData'

const STARTING_TOKENS = 100

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [activeScenario, setActiveScenario] = useState(null)
  const [hash, setHash] = useState(window.location.hash)
  const [tokens, setTokens] = useState(STARTING_TOKENS)
  const [unlockedCountries, setUnlockedCountries] = useState(['China'])
  const [glowCountry, setGlowCountry] = useState(null)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (hash === '#test') {
    return <VoiceTestPage />
  }

  function handleUnlockCountry(country) {
    setTokens((t) => t - UNLOCK_COST)
    setUnlockedCountries((list) => (list.includes(country.name) ? list : [...list, country.name]))
  }

  function handleSelectCountry(countryName) {
    setGlowCountry((current) => (current === countryName ? null : current))
    setSelectedCountry(countryName)
  }

  if (activeScenario) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 bg-[#0F1418] text-white font-sans animate-fade-in-up">
        <h1 className="font-display text-2xl font-extrabold text-center px-6">
          Starting "{activeScenario.title}" — gameplay coming soon
        </h1>
        <button
          type="button"
          onClick={() => setActiveScenario(null)}
          className="px-4 py-2.5 rounded-2xl bg-[#1F2937] hover:bg-[#28323c] border-2 border-[#37464F] border-b-4 active:border-b-2 active:translate-y-0.5 transition-all font-display font-extrabold text-gray-400"
        >
          Back to scenarios
        </button>
      </div>
    )
  }

  if (selectedCountry) {
    return (
      <ScenariosPage
        country={selectedCountry}
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
