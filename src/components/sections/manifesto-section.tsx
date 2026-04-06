import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const clipPath = useTransform(scrollYProgress, [0.2, 0.6], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-background px-6 py-32"
    >
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-center text-foreground/10">
          Поздравляю, если вы получили ссылочку —
          <br />
          значит вы приглашены на то самое празднование,
          <br />
          о котором мечтала маленькая «я».
        </h2>

        <motion.h2
          className="absolute inset-0 text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-center bg-gradient-to-r from-zinc-200 via-white to-zinc-400 bg-clip-text text-transparent"
          style={{ clipPath }}
        >
          Поздравляю, если вы получили ссылочку —
          <br />
          значит вы приглашены на то самое празднование,
          <br />
          о котором мечтала маленькая «я».
        </motion.h2>
      </div>
    </section>
  )
}