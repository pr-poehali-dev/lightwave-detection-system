import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 via-pink-100 to-yellow-100 opacity-50 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">С любовью ждём тебя</p>
          <h2 className="text-6xl md:text-8xl font-serif text-foreground">
            Настя, <em className="italic text-primary">23</em>.
          </h2>
          <p className="text-muted-foreground max-w-md mt-2">
            15 мая 2026 · 19:00 · Ресторан «Примавера», ул. Садовая, 12
          </p>

          <motion.a
            href="tel:+79001234567"
            className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            data-clickable
          >
            Подтвердить участие
          </motion.a>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">2026 · С праздником, Анастасия 🌹</p>
        </div>
      </div>
    </footer>
  )
}
