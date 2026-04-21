"use client"

import { motion } from "framer-motion"

export default function QuoteSection() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center bg-white py-32">
      <div className="relative z-10 container mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "anticipate" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 h-px w-32 origin-center bg-zinc-200 md:w-64"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <blockquote className="mb-12 text-2xl leading-tight font-medium tracking-tight text-zinc-900 italic md:text-4xl lg:text-5xl">
            "In the future, people won't ask 'What course did you take?'
            <br className="hidden md:block" />
            They'll ask 'What did you{" "}
            <span className="font-bold text-primary not-italic">
              build on Colrnx
            </span>
            ?'"
          </blockquote>

          <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase md:text-sm">
            — Colrnx Product Team
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "anticipate" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 h-px w-32 origin-center bg-zinc-200 md:w-64"
        />
      </div>
    </section>
  )
}
