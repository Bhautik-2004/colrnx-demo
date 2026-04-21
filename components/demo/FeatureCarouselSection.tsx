"use client"

import { motion } from "framer-motion"
import {
  Sparkles,
  LayoutGrid,
  Users,
  UserCog,
  Briefcase,
  Lock,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function FeatureCarouselSection() {
  return (
    <section className="overflow-hidden bg-slate-50 py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-4 text-2xl font-bold text-blue-900 md:text-3xl"
            >
              Feature Spotlights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-2xl text-base font-medium text-zinc-600 md:text-lg"
            >
              Everything you need to go from idea to shipped product.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {/* Card 1 */}
              <CarouselItem className="pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3 xl:basis-1/3">
                <Card className="group flex h-[400px] flex-col border-zinc-200 bg-white shadow-sm transition-colors hover:border-primary/50">
                  <CardContent className="relative flex h-full flex-col overflow-hidden p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-slate-100 text-zinc-600 transition-colors group-hover:text-primary">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-orange-700">
                      AI Product Builder
                    </h3>
                    <p className="mb-8 text-sm font-medium text-zinc-600">
                      Build real products with your team using AI — not alone.
                    </p>

                    {/* Illustration */}
                    <div className="relative mt-auto flex h-32 items-center justify-center rounded-xl border border-zinc-200 bg-slate-50 p-4 shadow-inner">
                      <div className="z-10 mr-4 flex -space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-50 bg-white shadow-sm">
                          <Users className="h-3 w-3 text-zinc-500" />
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-50 bg-white shadow-sm">
                          <Users className="h-3 w-3 text-zinc-500" />
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-50 bg-white shadow-sm">
                          <Users className="h-3 w-3 text-zinc-500" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <ArrowRight className="dashed-arrow h-4 w-4 text-zinc-400 opacity-50" />
                        <div className="rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary shadow-sm">
                          <Sparkles className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Card 2 */}
              <CarouselItem className="pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3 xl:basis-1/3">
                <Card className="group flex h-[400px] flex-col border-zinc-200 bg-white shadow-sm transition-colors hover:border-green-500/50">
                  <CardContent className="relative flex h-full flex-col overflow-hidden p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-slate-100 text-zinc-600 transition-colors group-hover:text-green-500">
                      <LayoutGrid className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-orange-700">
                      Contribution Graph
                    </h3>
                    <p className="mb-8 text-sm font-medium text-zinc-600">
                      Your track record, built automatically from every action
                      you take.
                    </p>

                    {/* Illustration */}
                    <div className="mt-auto flex h-32 flex-col justify-center gap-1.5 rounded-xl border border-zinc-200 bg-slate-50 p-4 shadow-inner">
                      <div className="flex gap-1.5">
                        <div className="h-4 w-4 rounded-sm bg-zinc-200" />
                        <div className="h-4 w-4 rounded-sm bg-green-500/80" />
                        <div className="h-4 w-4 rounded-sm bg-zinc-200" />
                        <div className="h-4 w-4 rounded-sm bg-green-500/40" />
                        <div className="h-4 w-4 rounded-sm bg-green-500" />
                        <div className="h-4 w-4 rounded-sm bg-zinc-200" />
                      </div>
                      <div className="flex gap-1.5">
                        <div className="h-4 w-4 rounded-sm bg-green-500/60" />
                        <div className="h-4 w-4 rounded-sm bg-zinc-200" />
                        <div className="h-4 w-4 rounded-sm bg-green-500" />
                        <div className="h-4 w-4 rounded-sm bg-zinc-200" />
                        <div className="h-4 w-4 rounded-sm bg-green-500/60" />
                        <div className="h-4 w-4 rounded-sm bg-green-500/90" />
                      </div>
                      <div className="flex gap-1.5">
                        <div className="h-4 w-4 rounded-sm bg-zinc-200" />
                        <div className="h-4 w-4 rounded-sm bg-zinc-200" />
                        <div className="h-4 w-4 rounded-sm bg-green-500/40" />
                        <div className="h-4 w-4 rounded-sm bg-green-500/30" />
                        <div className="h-4 w-4 rounded-sm bg-zinc-200" />
                        <div className="h-4 w-4 rounded-sm bg-green-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Card 3 */}
              <CarouselItem className="pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3 xl:basis-1/3">
                <Card className="group flex h-[400px] flex-col border-zinc-200 bg-white shadow-sm transition-colors hover:border-blue-500/50">
                  <CardContent className="relative flex h-full flex-col overflow-hidden p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-slate-100 text-zinc-600 transition-colors group-hover:text-blue-500">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-orange-700">
                      Role-Based Teams
                    </h3>
                    <p className="mb-8 text-sm font-medium text-zinc-600">
                      Frontend Dev. Backend Dev. Designer. PM. The right person,
                      every role.
                    </p>

                    {/* Illustration */}
                    <div className="mt-auto flex h-32 flex-col items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-slate-50 p-4 shadow-inner">
                      <div className="flex w-full max-w-[200px] items-center gap-3 rounded-lg border border-zinc-200 bg-white p-2 shadow-sm">
                        <div className="h-6 w-6 shrink-0 rounded-full border border-zinc-200 bg-slate-100" />
                        <div className="flex h-4 w-16 items-center justify-center rounded border border-blue-200 bg-blue-50 text-[8px] font-bold text-blue-600">
                          Frontend
                        </div>
                      </div>
                      <div className="flex w-full max-w-[200px] items-center gap-3 rounded-lg border border-zinc-200 bg-white p-2 shadow-sm">
                        <div className="h-6 w-6 shrink-0 rounded-full border border-zinc-200 bg-slate-100" />
                        <div className="flex h-4 w-16 items-center justify-center rounded border border-purple-200 bg-purple-50 text-[8px] font-bold text-purple-600">
                          Backend
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Card 4 */}
              <CarouselItem className="pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3 xl:basis-1/3">
                <Card className="group flex h-[400px] flex-col border-zinc-200 bg-white shadow-sm transition-colors hover:border-amber-500/50">
                  <CardContent className="relative flex h-full flex-col overflow-hidden p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-slate-100 text-zinc-600 transition-colors group-hover:text-amber-500">
                      <UserCog className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-zinc-900">
                      Mentor System
                    </h3>
                    <p className="mb-8 text-sm font-medium text-zinc-600">
                      Mentors assigned by program leads. Load-balanced. Weekly
                      goals set.
                    </p>

                    {/* Illustration */}
                    <div className="mt-auto flex h-32 items-center justify-between rounded-xl border border-zinc-200 bg-slate-50 p-4 px-6 shadow-inner">
                      <div className="flex flex-col items-center">
                        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-amber-600 shadow-sm">
                          <UserCog className="h-5 w-5" />
                        </div>
                        <div className="text-[10px] font-bold text-zinc-500 uppercase">
                          Mentor
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center gap-2 px-4">
                        <div className="bg-dashed relative h-px w-full border-b border-dashed border-zinc-300">
                          <ArrowRight className="absolute top-1/2 right-0 h-4 w-4 translate-x-1 -translate-y-1/2 text-zinc-400" />
                        </div>
                        <div className="flex gap-1">
                          <CheckCircle2 className="h-3 w-3 text-green-500" />
                          <CheckCircle2 className="h-3 w-3 text-green-500" />
                        </div>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full border-2 border-slate-50 bg-white shadow-sm" />
                        <div className="h-8 w-8 rounded-full border-2 border-slate-50 bg-white shadow-sm" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Card 5 */}
              <CarouselItem className="pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3 xl:basis-1/3">
                <Card className="group flex h-[400px] flex-col border-zinc-200 bg-white shadow-sm transition-colors hover:border-rose-500/50">
                  <CardContent className="relative flex h-full flex-col overflow-hidden p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-slate-100 text-zinc-600 transition-colors group-hover:text-rose-500">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-zinc-900">
                      Discovery Dashboard
                    </h3>
                    <p className="mb-8 text-sm font-medium text-zinc-600">
                      Teams discover collaborators from what people built, not
                      what they wrote.
                    </p>

                    {/* Illustration */}
                    <div className="mt-auto flex h-32 flex-col justify-center rounded-xl border border-zinc-200 bg-slate-50 p-4 shadow-inner">
                      <div className="mx-auto flex w-full max-w-[220px] items-center justify-between rounded-lg border border-zinc-200 bg-white p-3 shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 shrink-0 rounded-md border border-zinc-200 bg-zinc-100" />
                          <div className="flex flex-col gap-1">
                            <div className="h-2 w-12 rounded-full bg-zinc-300" />
                            <div className="h-1.5 w-8 rounded-full bg-zinc-200" />
                          </div>
                        </div>
                        <div className="rounded bg-rose-500 px-2 py-1 text-[9px] font-medium text-white shadow-sm">
                          Reach Out
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Card 6 */}
              <CarouselItem className="pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3 xl:basis-1/3">
                <Card className="group flex h-[400px] flex-col border-zinc-200 bg-white shadow-sm transition-colors hover:border-cyan-500/50">
                  <CardContent className="relative flex h-full flex-col overflow-hidden p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-slate-100 text-zinc-600 transition-colors group-hover:text-cyan-500">
                      <Lock className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-zinc-900">
                      Private Team Channels
                    </h3>
                    <p className="mb-8 text-sm font-medium text-zinc-600">
                      Public community feed. Private mentor channel. Two layers,
                      crystal clear.
                    </p>

                    {/* Illustration */}
                    <div className="relative mt-auto flex h-32 flex-col overflow-hidden rounded-xl border border-zinc-200 bg-slate-50 shadow-inner">
                      <div className="absolute inset-x-0 top-0 flex h-1/2 items-center gap-3 border-b border-zinc-200 bg-white p-3">
                        <MessageSquare className="h-4 w-4 text-zinc-400" />
                        <div className="text-[10px] font-bold text-zinc-500">
                          # general-chat
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 flex h-1/2 items-center gap-3 border-l-2 border-cyan-500 bg-cyan-50 p-3">
                        <Lock className="h-4 w-4 text-cyan-600" />
                        <div className="text-[10px] font-bold text-cyan-700">
                          # mentor-private
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2 z-10 h-10 w-10 border border-zinc-200 bg-white/95 text-zinc-600 shadow-sm backdrop-blur-sm hover:bg-slate-50 hover:text-zinc-900 disabled:opacity-40 md:left-3" />
            <CarouselNext className="right-2 z-10 h-10 w-10 border border-zinc-200 bg-white/95 text-zinc-600 shadow-sm backdrop-blur-sm hover:bg-slate-50 hover:text-zinc-900 disabled:opacity-40 md:right-3" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
