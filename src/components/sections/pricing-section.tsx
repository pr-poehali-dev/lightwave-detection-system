import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const wishes = [
  {
    name: "Хочу прийти!",
    emoji: "🥂",
    description: "Жду с нетерпением",
    features: [
      "Обязательно буду",
      "Приду с подарком",
      "Готов(а) танцевать всю ночь",
      "Приду вовремя, обещаю",
    ],
  },
  {
    name: "Уже еду!",
    emoji: "🌹",
    description: "Не могу дождаться",
    features: [
      "Буду с цветами",
      "Приготовил(а) тост",
      "Буду первым(ой) на месте",
      "Подарок уже упакован",
      "Сюрприз для именинницы",
    ],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Будешь с нами?</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Мы ждём только близких — тех, кто всегда рядом.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {wishes.map((wish, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ticket-edge ${wish.popular ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-clickable
            >
              {wish.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  ❤️ С любовью
                </span>
              )}

              <div className="text-center pb-6 border-b border-dashed border-border">
                <div className="text-4xl mb-3">{wish.emoji}</div>
                <h3 className="font-serif text-2xl text-foreground">{wish.name}</h3>
                <p className="text-muted-foreground text-sm mt-2">{wish.description}</p>
              </div>

              <ul className="space-y-3 mt-6">
                {wish.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Icon name="Check" className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
