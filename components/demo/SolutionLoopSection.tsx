"use client"

import { motion, Variants } from "framer-motion"
import {
  Compass,
  Users,
  LayoutGrid,
  Sparkles,
  Activity,
  Briefcase,
} from "lucide-react"
import { useEffect, useState } from "react"

const steps = [
  {
    id: 1,
    title: "Discover",
    description: "Find ideas and trends on the social feed",
    icon: Compass,
  },
  {
    id: 2,
    title: "Team Up",
    description: "Form role-matched teams for real projects",
    icon: Users,
  },
  {
    id: 3,
    title: "Collaborate",
    description: "Work together in a structured project workspace",
    icon: LayoutGrid,
  },
  {
    id: 4,
    title: "Build",
    description: "Ship products with an AI builder built for teams",
    icon: Sparkles,
  },
  {
    id: 5,
    title: "Track",
    description: "Show your contribution history, not just your resume",
    icon: Activity,
  },
  {
    id: 6,
    title: "Grow",
    description: "Get discovered through what you built",
    icon: Briefcase,
  },
]

export default function SolutionLoopSection() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkMatch = () => setIsDesktop(window.innerWidth >= 1024)
    checkMatch()
    window.addEventListener("resize", checkMatch)
    return () => window.removeEventListener("resize", checkMatch)
  }, [])

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const nodeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  }

  return (
    <section
      id="solution-loop"
      className="relative flex min-h-screen items-center overflow-hidden bg-white py-24"
    >
      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl"
          >
            How <span className="text-primary">Colrnx</span> Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-2xl text-base font-medium text-zinc-600 md:text-lg"
          >
            One unified loop from idea to verified track record.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative flex w-full flex-col items-center justify-between lg:flex-row lg:items-start"
        >
          {/* SVG Connector Lines */}
          {isDesktop && (
            <div className="absolute top-12 right-0 left-0 z-0 hidden h-1 overflow-hidden lg:block">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: steps.length * 0.3, ease: "linear" }}
                viewport={{ once: true, margin: "-100px" }}
                className="h-full bg-gradient-to-r from-primary/20 via-primary to-primary/20"
              />
            </div>
          )}

          {!isDesktop && (
            <div className="absolute top-0 bottom-0 left-1/2 z-0 block w-1 -translate-x-1/2 overflow-hidden lg:hidden">
              <motion.div
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                transition={{ duration: steps.length * 0.3, ease: "linear" }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full bg-gradient-to-b from-primary/20 via-primary to-primary/20"
              />
            </div>
          )}

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={nodeVariants}
              className="relative z-10 mb-12 flex w-full max-w-[200px] flex-col items-center text-center lg:mb-0"
            >
              <div className="group relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-zinc-200 bg-slate-50 bg-white shadow-sm transition-colors duration-300 hover:border-primary">
                <step.icon className="h-10 w-10 text-zinc-500 transition-colors duration-300 group-hover:text-primary" />
                <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md">
                  {step.id}
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900">
                {step.title}
              </h3>
              <p className="text-sm font-medium text-zinc-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
