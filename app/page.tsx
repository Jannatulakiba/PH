import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"

export default function Page() {
  return (
    <main className="min-h-svh bg-surface text-white">
      <Hero />
      <Stats />
    </main>
  )
}
