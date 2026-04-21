"use client"

import DashboardWindow from "./DashboardWindow"
import FeedWindow from "./FeedWindow"

export default function InteractivePreviewSection() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-200 bg-white py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-zinc-50/50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="pointer-events-none absolute top-0 right-0 left-0 -mt-24 h-96 rounded-[100%] bg-primary/10 opacity-50 blur-[120px]" />

      <div className="relative z-10 container mx-auto w-full px-4">
        <div className="mb-16 text-center md:mb-24">
          <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-5xl">
            Experience the Platform
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-zinc-600 md:text-xl">
            A fully integrated ecosystem built to help you discover, build, and
            grow. Try clicking the sidebar and scrolling inside the dashboard
            below.
          </p>
        </div>

        <DashboardWindow />

        <div className="h-20 md:h-28" />

        <FeedWindow />
      </div>
    </section>
  )
}
