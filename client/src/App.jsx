import { useState } from 'react'
import LandingPage from './LandingPage'

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null)

  if (selectedCountry) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 bg-[#05060a] text-white">
        <h1 className="text-2xl font-semibold">
          Arrived in {selectedCountry} — scenario menu coming soon
        </h1>
        <button
          type="button"
          onClick={() => setSelectedCountry(null)}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10"
        >
          Back to globe
        </button>
      </div>
    )
  }

  return <LandingPage onCountrySelect={(country) => setSelectedCountry(country)} />
}

export default App
