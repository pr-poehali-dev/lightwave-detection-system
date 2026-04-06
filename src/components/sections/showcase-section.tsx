import { motion } from "framer-motion"

export function ShowcaseSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Немного о себе
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <span className="absolute -top-8 -left-4 text-8xl text-primary/20 font-serif leading-none select-none">"</span>
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
            Я впервые планирую собрать такую разную тусовочку. Для кого-то я Ася, для кого-то Настя, или{" "}
            <span className="not-italic font-semibold text-primary">"НАСТЯ ПОМОЙ КОФЕ-МАШИНКУ ИЛИ В УГОЛ ПОСТАВЛЮ"</span>,
            бывшая одноклассница, Доча, какая-то девочка кассир из табачки, одногруппница (надеюсь любимая),
            сменщица, кто-то кто оказался рядом очень вовремя и смог помочь, или просто крутая тёлка. ахахахах
          </p>
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/90 italic mt-6">
            Я надеюсь, что в вашей жизни я есть как яркий элемент, потому что каждый из вас определённо есть в моём сердечке.
          </p>
          <span className="absolute -bottom-12 -right-4 text-8xl text-primary/20 font-serif leading-none select-none">"</span>
        </motion.div>

        <motion.p
          className="mt-16 text-2xl font-bold tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Люблю вас!!! До встречи 🤍
        </motion.p>
      </div>
    </section>
  )
}
