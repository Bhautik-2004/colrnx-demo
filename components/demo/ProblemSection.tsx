"use client"

import { motion, Variants } from "framer-motion"

export default function ProblemSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-slate-50 px-4 py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <motion.div
        className="relative z-10 flex w-full max-w-4xl flex-col space-y-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
      >
        <motion.div
          variants={itemVariants}
          className="text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl"
        >
          <span className="text-zinc-400">GitHub stores your code. </span>
          <span className="text-orange-700">It doesn't find your team.</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl"
        >
          <span className="text-zinc-400">LinkedIn shows your resume. </span>
          <span className="text-blue-900">It doesn't show what you built.</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl"
        >
          <span className="text-zinc-400">Discord keeps you talking. </span>
          <span className="text-orange-700">It doesn't help you ship.</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 border-t border-zinc-200 pt-12"
        >
          <div className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
            Colrnx closes the loop nobody else did.
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
