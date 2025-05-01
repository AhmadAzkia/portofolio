import { Navbar } from './components/Navbar'
import { Hero } from './components/hero'
import { Projects } from './components/projects'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
    </main>
  )
}
