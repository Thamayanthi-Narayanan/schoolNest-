import HeroSection from './pages/heroSection/HeroSection'
import DemoRequestModal from './components/demoRequestModal/DemoRequestModal'
import { DemoFormProvider } from './contexts/demoFormContext/DemoFormContext'
import './App.css'

function App() {
  return (
    <DemoFormProvider>
      <HeroSection />
      <DemoRequestModal />
    </DemoFormProvider>
  )
}

export default App
