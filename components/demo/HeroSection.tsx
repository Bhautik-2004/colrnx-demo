"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CounterProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

const Counter = ({ value, label, prefix = "", suffix = "" }: CounterProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [{ count }, setCount] = useState({ count: 0 })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000 // 2 seconds
      const increment = (end - start) / (duration / 16) // 60fps

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
  }, [isInView, value])

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-3xl font-bold text-zinc-900 md:text-4xl">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="mt-2 max-w-[150px] text-center text-sm text-zinc-600">
        {label}
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 pt-20 pb-32">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[20%] h-[500px] w-[500px] rounded-full bg-primary/10 opacity-70 mix-blend-multiply blur-[120px]" />
        <div className="absolute right-[20%] bottom-[20%] h-[600px] w-[600px] rounded-full bg-blue-500/10 opacity-50 mix-blend-multiply blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col items-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 max-w-5xl text-center text-3xl leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-5xl"
        >
          <span className="font-medium text-zinc-700">A place where </span>
          <span className="font-serif italic text-blue-900">builders collaborate</span>
          <span className="font-medium text-zinc-700">, build things that matter, and companies hire on </span>
          <span className="font-serif text-4xl italic text-primary md:text-5xl lg:text-6xl">
            credibility, not resumes.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-12 max-w-2xl text-center text-base font-medium text-zinc-600 md:text-lg"
        >
          A social, project-centric collaboration platform designed for the next
          generation of creators, makers, and dreamers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mb-24 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="h-14 rounded-full px-8 text-base font-medium"
            onClick={() => {
              document
                .getElementById("interactive-preview")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Explore the Platform
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="h-14 rounded-full px-8 text-base font-medium"
            onClick={() => {
              document
                .getElementById("solution-loop")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Watch How It Works
          </Button>
        </motion.div>

        {/* Animated Stat Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="relative z-20 grid w-full max-w-4xl grid-cols-2 gap-8 rounded-2xl border border-zinc-200 bg-white py-8 shadow-sm md:grid-cols-4"
        >
          <Counter
            value={85}
            suffix="%"
            label="of projects die before launch"
          />
          <Counter value={500} suffix="+" label="builders on the platform" />
          <Counter value={120} suffix="+" label="project teams formed" />
          <Counter value={40} suffix="+" label="active communities" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-zinc-500"
      >
        <div className="mb-2 text-sm tracking-widest uppercase">Scroll</div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
