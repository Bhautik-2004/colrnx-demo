"use client"

import { motion, Variants } from "framer-motion"
import { UserPlus, Users, GraduationCap, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ActorShowcaseSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="border-t border-zinc-200 bg-slate-50 py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl"
          >
            Built for the Entire Ecosystem
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {/* Column 1 - Builders */}
          <motion.div
            variants={itemVariants}
            className="relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <UserPlus className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-zinc-900">
              For Builders
            </h3>
            <p className="mb-8 font-medium text-zinc-600">
              Ship real things. Build your track record.
            </p>

            <ul className="mb-10 flex-1 space-y-4">
              <li className="flex items-start text-sm text-zinc-600">
                <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-primary" />
                <span>Find role-matched teammates for your ideas</span>
              </li>
              <li className="flex items-start text-sm text-zinc-600">
                <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-primary" />
                <span>Build with AI tools designed for teams, not solo</span>
              </li>
              <li className="flex items-start text-sm text-zinc-600">
                <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-primary" />
                <span>Get discovered through what you built</span>
              </li>
            </ul>

            {/* Miniature widget */}
            <Card className="mt-auto border-zinc-200 bg-slate-50 shadow-sm">
              <CardContent className="p-4">
                <div className="mb-3 flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-zinc-200">
                    <AvatarFallback className="bg-white text-xs text-zinc-500 shadow-sm">
                      AM
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-zinc-900">
                        Ayaan Mehta
                      </span>
                      <Badge className="h-4 border-none bg-amber-100 px-1.5 text-[10px] text-amber-700">
                        PRO
                      </Badge>
                    </div>
                    <div className="text-xs font-bold text-primary">
                      Score: 847
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex h-12 flex-1 items-center justify-center rounded-md border border-zinc-200 bg-white text-xs font-medium text-zinc-500 shadow-sm">
                    Proj 1
                  </div>
                  <div className="flex h-12 flex-1 items-center justify-center rounded-md border border-zinc-200 bg-white text-xs font-medium text-zinc-500 shadow-sm">
                    Proj 2
                  </div>
                  <div className="flex h-12 flex-1 items-center justify-center rounded-md border border-zinc-200 bg-white text-xs font-medium text-zinc-500 shadow-sm">
                    Proj 3
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Column 2 - Institutions */}
          <motion.div
            variants={itemVariants}
            className="relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-200 bg-purple-100 text-purple-600">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-zinc-900">
              For Institutions
            </h3>
            <p className="mb-8 font-medium text-zinc-600">
              Coordinate student build programs with clear workflows.
            </p>

            <ul className="mb-10 flex-1 space-y-4">
              <li className="flex items-start text-sm text-zinc-600">
                <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-purple-500" />
                <span>
                  Manage student teams, mentors, and reviews in one place
                </span>
              </li>
              <li className="flex items-start text-sm text-zinc-600">
                <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-purple-500" />
                <span>
                  Track student progress with weekly contribution graphs
                </span>
              </li>
              <li className="flex items-start text-sm text-zinc-600">
                <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-purple-500" />
                <span>Turn project work into verified portfolios</span>
              </li>
            </ul>

            {/* Miniature widget */}
            <Card className="mt-auto border-zinc-200 bg-slate-50 shadow-sm">
              <CardContent className="p-4">
                <h4 className="mb-2 line-clamp-1 text-sm font-bold text-zinc-900">
                  Campus Build Studio
                </h4>
                <div className="mb-3 grid grid-cols-2 gap-2">
                  <div className="rounded-md border border-zinc-200 bg-white p-2 shadow-sm">
                    <div className="text-[10px] font-bold text-zinc-500 uppercase">
                      Teams
                    </div>
                    <div className="text-sm font-bold text-zinc-900">25</div>
                  </div>
                  <div className="rounded-md border border-zinc-200 bg-white p-2 shadow-sm">
                    <div className="text-[10px] font-bold text-zinc-500 uppercase">
                      Participants
                    </div>
                    <div className="text-sm font-bold text-zinc-900">500+</div>
                  </div>
                </div>
                <div className="rounded-md border border-purple-200 bg-purple-50 p-2">
                  <div className="text-[10px] font-bold text-purple-600 uppercase">
                    Projects Reviewed
                  </div>
                  <div className="text-sm font-bold text-purple-600">
                    47 Demos
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Column 3 - Communities */}
          <motion.div
            variants={itemVariants}
            className="relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-600">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-zinc-900">
              For Communities
            </h3>
            <p className="mb-8 font-medium text-zinc-600">
              Spot high-signal builders based on real output.
            </p>

            <ul className="mb-10 flex-1 space-y-4">
              <li className="flex items-start text-sm text-zinc-600">
                <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-blue-500" />
                <span>Launch focused challenge prompts for builders</span>
              </li>
              <li className="flex items-start text-sm text-zinc-600">
                <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-blue-500" />
                <span>Run guided reviews and office hours</span>
              </li>
              <li className="flex items-start text-sm text-zinc-600">
                <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-blue-500" />
                <span>Highlight standout work to inspire next teams</span>
              </li>
            </ul>

            {/* Miniature widget */}
            <Card className="mt-auto border-zinc-200 bg-slate-50 shadow-sm">
              <CardContent className="space-y-2 p-4">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-md border border-transparent p-2 shadow-sm transition-colors hover:border-zinc-200 hover:bg-white"
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-zinc-200 text-[8px] font-bold text-zinc-600">
                          ST
                        </AvatarFallback>
                      </Avatar>
                      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-zinc-200">
                        <div
                          className="h-full bg-blue-500"
                          style={{ width: `${80 - i * 15}%` }}
                        />
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="h-6 bg-blue-500 px-2 text-[10px] text-white hover:bg-blue-600"
                    >
                      Feature
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
