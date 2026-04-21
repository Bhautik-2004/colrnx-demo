"use client"

import { motion } from "framer-motion"

const builders = [
  {
    name: "Vashisht Brahmbhatt",
    title: "202302626010156 | AIML Track",
    sem: "Semester 6",
    thought:
      "Don’t just learn the stack - build something that proves you understand it.",
    photo: "/builders/vashisht-brahmbhatt.jpg",
    linkedin: "https://www.linkedin.com/in/vashishtdb24"
  },
  {
    name: "Daksh Patel",
    title: "202302626010099 | AIML Track",
    sem: "Semester 6",
    thought:
      "The fastest way to grow is to build with people who challenge you.",
    photo: "/builders/daksh-patel.jpg",
    linkedin: "https://www.linkedin.com/in/dakshp2005"
  },
  {
    name: "Bhautik Vaghamshi",
    title: "202302626010154 | AIML Track",
    sem: "Semester 6",
    thought: "Productivity is measured by what you build, not what you plan.",
    photo: "/builders/bhautik-vaghamshi.jpg",
    linkedin: "https://www.linkedin.com/in/bhautik2004"
  },
]

// Duplicate the array to create a seamless infinite scroll loop
const scrollingBuilders = [...builders, ...builders, ...builders]

export default function BuildersSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-0">
      <div className="container mx-auto mb-16 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl"
        >
          Colrnx Builders
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-zinc-600"
        >
          The Vision behind the implementation.
        </motion.p>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // Adjust this to make it scroll slower/faster
          }}
          className="flex w-max flex-nowrap items-stretch gap-6 px-3"
        >
          {scrollingBuilders.map((builder, index) => {
            const initials = builder.name
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("")

            return (
              <article
                key={`${builder.name}-${index}`}
                className="flex w-[480px] shrink-0 gap-5 rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_4px_12px_-4px_rgba(16,24,40,0.04)]"
              >
                {/* Image Block */}
                <div className="relative h-44 w-36 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold tracking-wide text-zinc-500">
                    {initials}
                  </div>
                  <img
                    src={builder.photo}
                    alt={builder.name}
                    className="relative h-full w-full object-cover"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none"
                    }}
                  />
                </div>

                {/* Content Block */}
                <div className="flex flex-1 flex-col">
                  <a
                    href={builder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <h3 className="text-xl font-semibold tracking-tight text-blue-900 transition-colors group-hover:text-blue-600 group-hover:underline underline-offset-4">
                      {builder.name}
                    </h3>
                  </a>
                  <p className="mt-3 text-lg leading-relaxed text-orange-600 italic">
                    "{builder.thought}"
                  </p>
                  <div className="mt-auto flex flex-col gap-1 pt-4">
                    <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      {builder.sem}
                    </p>
                    <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                      {builder.title}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
