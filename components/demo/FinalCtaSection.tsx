"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Globe,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  ShieldCheck,
  Twitter,
} from "lucide-react"

export default function FinalCtaSection() {
  const [showContactLinks, setShowContactLinks] = useState(false)

  return (
    <div className="bg-slate-50 text-zinc-900">
      <section className="relative overflow-hidden border-y border-zinc-200 py-24">
        {/* Glow effects */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 opacity-50 blur-[100px]" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-900 md:text-4xl lg:text-5xl">
              Ready to see the full platform?
            </h2>
            <p className="mb-12 text-base font-medium text-zinc-600 md:text-lg">
              Book a walkthrough with our team.
            </p>

            <div className="mb-8 flex justify-center">
              <Button
                size="lg"
                className="h-14 rounded-full px-10 text-base font-medium"
                onClick={() => setShowContactLinks(true)}
              >
                Book a Demo
              </Button>
            </div>

            {showContactLinks && (
              <motion.div
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mx-auto mb-16 max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm backdrop-blur"
              >
                <p className="mb-4 text-sm font-semibold tracking-wide text-zinc-500 uppercase">
                  Contact Links
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <a
                    href="https://twitter.com/colrnxofficial"
                    target="_blank"
                    rel="noreferrer"
                    title="Twitter"
                    aria-label="Twitter"
                    className="group relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <Twitter className="relative h-7 w-7 text-sky-600" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="https://instagram.com/colrnx"
                    target="_blank"
                    rel="noreferrer"
                    title="Instagram"
                    aria-label="Instagram"
                    className="group relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:-translate-y-0.5 hover:border-pink-300 hover:shadow-md"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <Instagram className="relative h-7 w-7 text-pink-600" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com/company/colrnx"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                    aria-label="LinkedIn"
                    className="group relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <Linkedin className="relative h-7 w-7 text-blue-700" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:support@colrnx.com"
                    title="Email support@colrnx.com"
                    aria-label="Email support@colrnx.com"
                    className="group relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <Mail className="relative h-7 w-7 text-emerald-700" />
                    <span className="sr-only">support@colrnx.com</span>
                  </a>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
                  <Mail className="h-4 w-4 text-emerald-700" />
                  <a
                    href="mailto:support@colrnx.com"
                    className="transition-colors hover:text-zinc-900"
                  >
                    support@colrnx.com
                  </a>
                </div>
              </motion.div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-zinc-500 md:gap-16">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                SSIP Backed by Government of Gujarat
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <a
                  href="https://colrnx.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-zinc-900"
                >
                  colrnx.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm font-medium text-zinc-500 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold tracking-tight text-zinc-900">
              Colrnx
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-zinc-300 md:inline-block" />
            <span>Build Together. Grow Together.</span>
          </div>

          <div>&copy; 2026 Colrnx. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
