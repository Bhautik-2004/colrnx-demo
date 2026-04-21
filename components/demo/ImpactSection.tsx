"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface CounterProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  duration?: number
}

const ImpactCounter = ({
  value,
  label,
  prefix = "",
  suffix = "",
  duration = 2000,
}: CounterProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [{ count }, setCount] = useState({ count: 0 })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const increment = (end - start) / (duration / 16) // ~60fps

      const updateCounter = () => {
        start += increment
        if (start < end) {
          setCount({ count: Math.ceil(start) })
          requestAnimationFrame(updateCounter)
        } else {
          setCount({ count: end })
        }
      }
      requestAnimationFrame(updateCounter)
    }
  }, [isInView, value, duration])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="mb-4 text-5xl font-bold tracking-tighter text-zinc-900 md:text-6xl lg:text-7xl">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-base font-medium tracking-wide text-zinc-600 uppercase md:text-lg">
        {label}
      </div>
    </div>
  )
}

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-200 bg-white py-32">
      {/* Subtle light effect in center */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center font-bold tracking-widest text-zinc-500 uppercase"
        >
          The numbers behind what we're building
        </motion.p>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ImpactCounter
              value={85}
              suffix="%"
              label="of projects die before launch"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ImpactCounter
              value={16}
              suffix=" weeks"
              label="average team consistency"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ImpactCounter
              value={75}
              suffix="+"
              label="projects launched in cohorts"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ImpactCounter
              value={1}
              suffix=" place"
              label="idea to team to shipped product"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
