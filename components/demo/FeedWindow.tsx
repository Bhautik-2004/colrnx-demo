"use client"

import { motion } from "framer-motion"
import {
  Flame,
  Image as ImageIcon,
  Link as LinkIcon,
  MessageSquare,
  Send,
  TrendingUp,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function FeedWindow() {
  const feedContent = (
    <div className="space-y-6 pb-6">
      <Card className="border-zinc-800 bg-zinc-900/40">
        <CardContent className="p-5">
          <div className="flex items-start space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/demo/avatar1.png" />
              <AvatarFallback className="bg-zinc-800">AM</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="flex items-center">
                <span className="mr-2 font-semibold text-white">
                  Ayaan Mehta
                </span>
                <span className="text-xs text-zinc-500">2h ago</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Just shipped the MVP of our AI crop disease detector. Team
                syncs, fast feedback loops, and shared ownership made the
                difference.
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs font-medium">
                <div className="flex cursor-pointer items-center text-zinc-400 hover:text-white">
                  <Flame className="mr-1.5 h-4 w-4" /> 42
                </div>
                <div className="flex cursor-pointer items-center text-zinc-400 hover:text-white">
                  <MessageSquare className="mr-1.5 h-4 w-4" /> 12
                </div>
                <div className="ml-auto flex cursor-pointer items-center text-primary">
                  <LinkIcon className="mr-1 h-3 w-3" /> AI Crop Detector
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-zinc-800 bg-zinc-900/40">
        <CardContent className="p-5">
          <div className="flex items-start space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-zinc-800">PS</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center">
                <span className="mr-2 font-semibold text-white">
                  Priya Sharma
                </span>
                <Badge className="h-4 border-amber-500/20 bg-amber-500/10 px-1.5 py-0 text-[10px] text-amber-500 hover:bg-amber-500/20">
                  PRO
                </Badge>
                <span className="ml-2 text-xs text-zinc-500">4h ago</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                Looking for a UI designer to join our blockchain voting project.
                We already have frontend and backend covered.
              </p>
              <div className="mt-3 text-xs font-medium text-primary">
                #OpenToCollaborate
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs font-medium">
                <div className="flex items-center text-zinc-400">
                  <Flame className="mr-1.5 h-4 w-4" /> 18
                </div>
                <div className="flex items-center text-zinc-400">
                  <MessageSquare className="mr-1.5 h-4 w-4" /> 5
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-zinc-800 bg-zinc-900/40">
        <CardContent className="p-5">
          <div className="flex items-start space-x-3">
            <Avatar className="h-12 w-12 rounded-lg">
              <AvatarFallback className="rounded-lg bg-zinc-800 text-primary">
                CL
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center">
                <span className="mr-2 font-semibold text-white">
                  Campus Product Lab
                </span>
                <Badge className="h-4 border-purple-500/20 bg-purple-500/10 px-1.5 py-0 text-[10px] text-purple-400">
                  INSTITUTION
                </Badge>
              </div>
              <p className="mt-1 text-sm font-medium text-white">
                New build review toolkit published for student teams.
              </p>
              <p className="mt-1 mb-2 text-sm leading-relaxed text-zinc-400">
                Includes planning templates, progress snapshots, and mentor
                feedback prompts.
              </p>
              <div className="mt-2 text-xs font-medium text-primary">
                #BuildWorkflow
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs font-medium">
                <div className="flex items-center text-zinc-400">
                  <Flame className="mr-1.5 h-4 w-4" /> 97
                </div>
                <div className="flex items-center text-zinc-400">
                  <MessageSquare className="mr-1.5 h-4 w-4" /> 28
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-2 border-zinc-800 border-l-blue-500 bg-zinc-900/40">
        <CardContent className="p-5">
          <div className="flex items-start space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-blue-900 text-blue-300">
                DC
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center">
                <span className="mr-2 font-semibold text-white">
                  Design Circle
                </span>
                <Badge className="h-4 border-blue-500/20 bg-blue-500/10 px-1.5 py-0 text-[10px] text-blue-400">
                  COMMUNITY
                </Badge>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                Shared a new onboarding flow library from this week&apos;s team
                critiques. Open for remix.
              </p>
              <div className="mt-2 cursor-pointer text-xs font-medium text-blue-400">
                #DesignSystems
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs font-medium">
                <div className="flex items-center text-zinc-400">
                  <Flame className="mr-1.5 h-4 w-4" /> 83
                </div>
                <div className="flex items-center text-zinc-400">
                  <MessageSquare className="mr-1.5 h-4 w-4" /> 31
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950">
        <CardContent className="relative flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 flex items-center text-xs font-semibold tracking-wider text-primary uppercase">
              <TrendingUp className="mr-1 h-3 w-3" /> Trending Topic
            </div>
            <h4 className="text-lg font-semibold text-white">
              AI for Social Good
            </h4>
            <p className="mt-1 text-sm text-zinc-400">
              847 builders discussing this right now
            </p>
          </div>
          <Button className="shrink-0">Convert to Project</Button>
        </CardContent>
      </Card>

      <Card className="border-zinc-800 bg-zinc-900/40">
        <CardContent className="p-5">
          <div className="flex items-start space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-zinc-800">RP</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center">
                <span className="mr-2 font-semibold text-white">Raj Patel</span>
                <span className="ml-auto text-xs text-zinc-500">1d ago</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                Six months of consistent shipping helped me land my first paid
                product sprint collaboration. Proof of work beats profile
                buzzwords.
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs font-medium">
                <div className="flex items-center text-zinc-400">
                  <Flame className="mr-1.5 h-4 w-4" /> 210
                </div>
                <div className="flex items-center text-zinc-400">
                  <MessageSquare className="mr-1.5 h-4 w-4" /> 45
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="relative mx-auto mt-24 flex h-[800px] w-full max-w-4xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateX: -15, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1, type: "spring", bounce: 0.2 }}
        style={{ transformPerspective: 1200 }}
        className="relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_0_80px_rgba(59,130,246,0.15)]"
      >
        <div className="z-20 flex h-12 flex-shrink-0 items-center border-b border-zinc-800 bg-zinc-900 px-4">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="mx-auto flex items-center rounded bg-zinc-800/50 px-3 py-1 font-mono text-xs text-zinc-400">
            colrnx.com/feed
          </div>
        </div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-2xl flex-col border-x border-zinc-800/50 bg-black/40">
          <div className="z-20 flex flex-shrink-0 border-b border-zinc-800/50 bg-zinc-950/80 px-6 pt-4 backdrop-blur-md">
            <div className="cursor-pointer border-b-2 border-primary px-4 py-3 font-medium text-white">
              Home
            </div>
            <div className="cursor-pointer px-4 py-3 font-medium text-zinc-400 transition-colors hover:text-zinc-200">
              Trending
            </div>
            <div className="cursor-pointer px-4 py-3 font-medium text-zinc-400 transition-colors hover:text-zinc-200">
              Saved
            </div>
          </div>

          <div className="z-20 flex-shrink-0 border-b border-zinc-800/50 bg-zinc-950 p-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/demo/avatar1.png" />
                <AvatarFallback className="bg-zinc-800">AM</AvatarFallback>
              </Avatar>
              <div className="flex flex-1 rounded-full border border-zinc-800 bg-zinc-900/50 pt-1 pr-1 pb-1 pl-4">
                <Input
                  disabled
                  placeholder="What are you building today?"
                  className="h-9 w-full border-none bg-transparent shadow-none focus-visible:ring-0"
                />
                <Button
                  disabled
                  size="icon"
                  variant="ghost"
                  className="h-9 w-9 rounded-full text-zinc-500"
                >
                  <ImageIcon className="h-4 w-4" />
                </Button>
                <Button disabled size="icon" className="h-9 w-9 rounded-full">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-10 bg-gradient-to-b from-zinc-950 to-transparent" />
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-20 bg-gradient-to-t from-zinc-950 to-transparent" />

            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              className="absolute right-0 left-0 w-full px-6 pt-6"
            >
              <div className="w-full">{feedContent}</div>
              <div className="w-full">{feedContent}</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
