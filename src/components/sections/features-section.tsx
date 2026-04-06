import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function CountdownWidget() {
  const eventDate = new Date("2026-05-15T19:00:00")
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const calc = () => {
      const diff = eventDate.getTime() - Date.now()
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
        })
      }
    }
    calc()
    const id = setInterval(calc, 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex items-center justify-center h-full gap-4">
      {[
        { v: timeLeft.days, l: "дней" },
        { v: timeLeft.hours, l: "часов" },
        { v: timeLeft.minutes, l: "минут" },
      ].map(({ v, l }) => (
        <div key={l} className="text-center">
          <div className="font-serif text-4xl md:text-5xl text-foreground">{v}</div>
          <div className="text-xs text-muted-foreground mt-1">{l}</div>
        </div>
      ))}
    </div>
  )
}

function DressCode() {
  const [active, setActive] = useState(0)
  const options = ["Романтик", "Вечерний", "Casual"]

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % options.length), 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      {options.map((opt, i) => (
        <motion.div
          key={opt}
          className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
          animate={{
            backgroundColor: active === i ? "hsl(340 70% 55%)" : "hsl(340 25% 94%)",
            color: active === i ? "white" : "hsl(340 40% 40%)",
            scale: active === i ? 1.05 : 1,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {opt}
        </motion.div>
      ))}
    </div>
  )
}

function LocationWidget() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <motion.div
        className="text-5xl"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        📍
      </motion.div>
      <span className="font-serif text-xl text-foreground text-center">Ресторан «Примавера»</span>
      <span className="text-xs text-muted-foreground">ул. Садовая, 12</span>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Детали вечера
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <CountdownWidget />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">До праздника</h3>
              <p className="text-muted-foreground text-sm mt-1">15 мая 2026, начало в 19:00</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.2 }}
            whileHover={{ scale: 0.98 }}
            data-clickable
          >
            <div className="flex-1">
              <DressCode />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Дресс-код</h3>
              <p className="text-muted-foreground text-sm mt-1">Романтичный вечерний образ.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.2 }}
            whileHover={{ scale: 0.98 }}
            data-clickable
          >
            <div className="flex-1">
              <LocationWidget />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Место</h3>
              <p className="text-muted-foreground text-sm mt-1">Уютный зал только для своих.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
