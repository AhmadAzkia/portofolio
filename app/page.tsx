import { Navbar } from './components/Navbar'
import { Hero } from './components/hero'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  )
}
