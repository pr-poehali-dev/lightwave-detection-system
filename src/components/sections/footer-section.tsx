import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-600 via-zinc-500 to-zinc-700 opacity-20 blur-3xl rounded-full" />
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
            10 апреля 2026 · 20:00 · ул. Связистов, 164
          </p>

          <motion.a
            href="https://t.me/+FpmeIPqZg8o2MzQy"
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