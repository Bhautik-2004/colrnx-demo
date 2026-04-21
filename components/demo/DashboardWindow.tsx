"use client"

import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Activity,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  Compass,
  Flame,
  FolderGit2,
  Globe,
  Hash,
  Image as ImageIcon,
  LayoutDashboard,
  Link as LinkIcon,
  MessageSquare,
  Rocket,
  Rss,
  Send,
  Sparkles,
  TrendingUp,
  type LucideIcon,
  UserCircle2,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

type DemoTab =
  | "dashboard"
  | "home"
  | "trending"
  | "explore"
  | "my-communities"
  | "projects"
  | "profile"

const AnnotationArrow = ({
  className,
  delay = 0,
  label,
  pathD,
  labelPosition,
  isVisible = true,
}: {
  className?: string
  delay?: number
  label: string
  pathD: string
  labelPosition: string
  isVisible?: boolean
}) => {
  const markerId = useId()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.25 }}
      className={`pointer-events-none absolute z-40 hidden flex-col text-primary xl:flex ${className}`}
    >
      <div className={`text-xs leading-snug font-semibold ${labelPosition}`}>
        {label}
      </div>
      <svg
        viewBox="0 0 120 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="h-20 w-30 overflow-visible text-primary/90 drop-shadow-sm"
      >
        <defs>
          <marker
            id={markerId}
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>
        <motion.path
          d={pathD}
          markerEnd={`url(#${markerId})`}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  )
}

export default function DashboardWindow() {
  const [activeTab, setActiveTab] = useState<DemoTab>("dashboard")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (contentRef.current) {
      setIsScrolled(contentRef.current.scrollTop > 24)
    }
  }

  const setTab = (tab: DemoTab) => {
    setActiveTab(tab)
    setIsProfileMenuOpen(false)
  }

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0
    }
    setIsScrolled(false)
  }, [activeTab])

  const renderSidebarItem = (id: DemoTab, icon: LucideIcon, label: string) => {
    const isActive = activeTab === id
    const Icon = icon

    return (
      <button
        type="button"
        onClick={() => setTab(id)}
        className={`flex w-full items-center rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "border-zinc-200 bg-white text-primary shadow-sm"
            : "border-transparent text-zinc-600 hover:text-zinc-900"
        }`}
      >
        <Icon
          className={`mr-3 h-4 w-4 ${isActive ? "text-primary" : "text-zinc-500"}`}
        />
        {label}
      </button>
    )
  }

  const dashboardProjects = [
    {
      name: "AI Crop Disease Detector",
      status: "In Progress",
      note: "Last activity: 2 hours ago",
      badge: "67% Contrib",
      tone: "text-blue-600",
      done: false,
    },
    {
      name: "Portfolio Builder SaaS",
      status: "Completed",
      note: "Shipped this week",
      badge: "100% Delivered",
      tone: "text-green-600",
      done: true,
    },
  ]

  const trendingPosts = [
    {
      title: "How teams are turning weekly demos into shipped features",
      tag: "#BuildInPublic",
      heat: 482,
      replies: 91,
    },
    {
      title: "UI handoff checklist that reduced QA loops by 40%",
      tag: "#DesignSystems",
      heat: 356,
      replies: 54,
    },
    {
      title: "Realtime collab stack comparison: Socket.IO vs Supabase Realtime",
      tag: "#TechTalk",
      heat: 291,
      replies: 67,
    },
  ]

  const exploreCommunities = [
    {
      name: "Frontend Forge",
      members: "2.1K",
      focus: "React, motion, accessibility",
      projects: "38 active projects",
    },
    {
      name: "AI Builders Circle",
      members: "1.4K",
      focus: "LLMs, product workflows, evaluations",
      projects: "24 active projects",
    },
    {
      name: "Campus Launchpad",
      members: "980",
      focus: "Student teams, capstone shipping",
      projects: "19 active projects",
    },
  ]

  const myCommunities = [
    {
      name: "Product Sprint Room",
      role: "Core Contributor",
      unread: 6,
      topic: "Weekly sprint goals",
    },
    {
      name: "Design Review Guild",
      role: "Member",
      unread: 2,
      topic: "Mobile onboarding critiques",
    },
    {
      name: "DevRel Makers",
      role: "Moderator",
      unread: 0,
      topic: "Creator growth experiments",
    },
  ]

  const workspaceProjects = [
    {
      name: "Realtime Classroom Dashboard",
      stage: "Planning",
      update: "Scope finalized, roles assigned",
    },
    {
      name: "Personal Knowledge AI",
      stage: "Development",
      update: "Search module integrated",
    },
    {
      name: "Community Jobs Board",
      stage: "Review",
      update: "Polish pass before release",
    },
  ]

  const DashboardContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-2 mx-auto max-w-5xl space-y-8 pb-20 duration-500">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Welcome back, Ayaan.
          </h1>
          <p className="mt-1 font-medium text-zinc-600">
            Here is what your network is building today.
          </p>
        </div>
        <div className="hidden items-center text-sm font-medium text-zinc-600 sm:flex">
          <Circle className="mr-2 h-2 w-2 fill-green-500 text-green-500" />
          Online
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="text-sm font-bold tracking-tight text-zinc-500 uppercase">
                Contribution Score
              </div>
              <Activity className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-4 flex items-end gap-2 text-3xl font-bold text-zinc-900">
              847
              <span className="mb-1 flex text-xs font-semibold text-green-600">
                <ChevronUp className="h-3 w-3" /> 12 this week
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="text-sm font-bold tracking-tight text-zinc-500 uppercase">
                Projects Active
              </div>
              <FolderGit2 className="h-4 w-4 text-blue-500" />
            </div>
            <div className="mt-4 text-3xl font-bold text-zinc-900">3</div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="text-sm font-bold tracking-tight text-zinc-500 uppercase">
                Communities Joined
              </div>
              <Globe className="h-4 w-4 text-purple-500" />
            </div>
            <div className="mt-4 text-3xl font-bold text-zinc-900">7</div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-zinc-200 bg-white shadow-sm">
          <div className="absolute top-0 right-0 p-2 opacity-5">
            <Sparkles className="h-24 w-24 text-zinc-900" />
          </div>
          <CardContent className="relative z-10 p-6">
            <div className="flex items-start justify-between">
              <div className="text-sm font-bold tracking-tight text-zinc-500 uppercase">
                AI Queries This Month
              </div>
              <Sparkles className="h-4 w-4 text-amber-500" />
            </div>
            <div className="mt-4 flex items-baseline gap-1 text-3xl font-bold text-zinc-900">
              38 <span className="text-sm font-medium text-zinc-500">/ 50</span>
            </div>
            <Progress
              value={76}
              className="mt-3 h-1.5 bg-zinc-100 [&>div]:bg-primary"
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <div className="space-y-4 xl:col-span-2">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <h2 className="text-xl font-bold text-zinc-900">Your Projects</h2>
            <button
              type="button"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all
            </button>
          </div>

          <div className="space-y-3">
            {dashboardProjects.map((project) => (
              <Card
                key={project.name}
                className="border-zinc-200 bg-white shadow-sm transition-colors hover:border-primary/50"
              >
                <CardContent className="p-5">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900">
                        {project.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-sm font-medium text-zinc-500">
                        <span className={`flex items-center ${project.tone}`}>
                          {project.done ? (
                            <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" />
                          ) : (
                            <Circle className="mr-1.5 h-2 w-2 fill-current" />
                          )}
                          {project.status}
                        </span>
                        <span className="text-zinc-300">•</span>
                        <span>{project.note}</span>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-primary/30 bg-primary/5 text-primary"
                    >
                      {project.badge}
                    </Badge>
                  </div>

                  <div className="mt-2 flex items-end justify-between border-t border-zinc-100 pt-4">
                    <div className="flex -space-x-2">
                      <Avatar className="h-8 w-8 border-2 border-white shadow-sm">
                        <AvatarFallback className="bg-slate-100 text-xs font-bold text-zinc-600">
                          AM
                        </AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-white shadow-sm">
                        <AvatarFallback className="bg-slate-200 text-xs font-bold text-zinc-600">
                          RJ
                        </AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-white shadow-sm">
                        <AvatarFallback className="bg-slate-100 text-xs font-bold text-zinc-600">
                          PS
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <Button size="sm" className="h-8 text-xs font-bold">
                      Workspace
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <h2 className="text-xl font-bold text-zinc-900">
              Suggested for You
            </h2>
          </div>

          <Card className="border-zinc-200 bg-white shadow-sm">
            <CardContent className="flex flex-col items-start gap-4 p-5">
              <div>
                <h4 className="mb-1 font-bold text-zinc-900">
                  Realtime Study Planner
                </h4>
                <p className="line-clamp-2 text-xs font-medium text-zinc-600">
                  Looking for a frontend engineer to polish task board
                  interactions and onboarding screens.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-slate-100 text-xs text-zinc-700 hover:bg-slate-200"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-100 text-xs text-zinc-700 hover:bg-slate-200"
                >
                  Product UI
                </Badge>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="group mt-2 h-8 w-full text-xs font-bold"
              >
                Apply to Team
                <ArrowUpRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8">
        <h3 className="flex items-center justify-center text-lg font-bold text-zinc-500">
          <ChevronDown className="mr-2 h-5 w-5 animate-bounce" />
          More Activity Below
        </h3>
      </div>
    </div>
  )

  const HomeFeedContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-2 mx-auto max-w-2xl space-y-6 pb-20 duration-500">
      <div className="sticky top-0 z-10 -mt-8 mb-6 flex border-b border-zinc-200 bg-white/80 pt-8 backdrop-blur-md">
        <div className="cursor-pointer border-b-2 border-primary px-4 py-3 font-bold text-zinc-900">
          For You
        </div>
        <div className="cursor-pointer px-4 py-3 font-medium text-zinc-500 transition-colors hover:text-zinc-900">
          Following
        </div>
      </div>

      <div className="mb-6 flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
        <Avatar className="h-10 w-10 border border-zinc-200">
          <AvatarImage src="/demo/avatar1.png" />
          <AvatarFallback className="bg-slate-100 text-zinc-600">
            AM
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-1 rounded-full border border-zinc-200 bg-slate-50 pt-1 pr-1 pb-1 pl-4">
          <Input
            disabled
            placeholder="What are you building today?"
            className="h-9 w-full border-none bg-transparent font-medium text-zinc-700 shadow-none placeholder:text-zinc-500 focus-visible:ring-0"
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

      <Card className="border-zinc-200 bg-white shadow-sm">
        <CardContent className="p-5">
          <div className="flex items-start space-x-3">
            <Avatar className="h-10 w-10 border border-zinc-200">
              <AvatarImage src="/demo/avatar1.png" />
              <AvatarFallback className="bg-slate-100 text-zinc-600">
                AM
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="flex items-center">
                <span className="mr-2 font-bold text-zinc-900">
                  Ayaan Mehta
                </span>
                <span className="text-xs font-medium text-zinc-500">
                  2h ago
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed font-medium text-zinc-700">
                Just shipped the MVP of our crop-health model with the team.
                From idea board to release notes in 3 weeks.
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs font-bold">
                <div className="flex cursor-pointer items-center text-zinc-500 transition-colors hover:text-red-500">
                  <Flame className="mr-1.5 h-4 w-4" /> 42
                </div>
                <div className="flex cursor-pointer items-center text-zinc-500 transition-colors hover:text-blue-500">
                  <MessageSquare className="mr-1.5 h-4 w-4" /> 12
                </div>
                <div className="ml-auto flex cursor-pointer items-center rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary">
                  <LinkIcon className="mr-1 h-3 w-3" /> AI Crop Detector
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-zinc-200 bg-white shadow-sm">
        <CardContent className="p-5">
          <div className="flex items-start space-x-3">
            <Avatar className="h-12 w-12 rounded-lg border border-zinc-200">
              <AvatarFallback className="rounded-lg bg-slate-50 text-primary">
                CL
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="mb-1 line-clamp-1 flex items-center">
                <span className="mr-2 font-bold text-zinc-900">
                  Campus Product Lab
                </span>
                <Badge
                  variant="outline"
                  className="h-4 border-purple-200 bg-purple-50 px-1.5 py-0 text-[10px] font-bold text-purple-700 uppercase"
                >
                  Institution
                </Badge>
                <span className="ml-2 text-xs font-medium text-zinc-500">
                  4h ago
                </span>
              </div>
              <p className="mt-1 text-sm font-bold text-zinc-900">
                Weekly build review templates are now live for all student
                teams.
              </p>
              <p className="mt-1 mb-2 text-sm leading-relaxed font-medium text-zinc-600">
                Includes sprint planning boards, demo-day checklist, and mentor
                feedback format.
              </p>
              <div className="mt-2 text-xs font-bold text-primary">
                #TeamWorkflow
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs font-bold">
                <div className="flex cursor-pointer items-center text-zinc-500 transition-colors hover:text-red-500">
                  <Flame className="mr-1.5 h-4 w-4" /> 128
                </div>
                <div className="flex cursor-pointer items-center text-zinc-500 transition-colors hover:text-blue-500">
                  <MessageSquare className="mr-1.5 h-4 w-4" /> 39
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-zinc-200 border-l-emerald-500 bg-white shadow-sm">
        <CardContent className="p-5">
          <div className="flex items-start space-x-3">
            <Avatar className="h-10 w-10 border border-zinc-200">
              <AvatarFallback className="bg-emerald-50 text-emerald-700">
                DC
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="mb-1 line-clamp-1 flex items-center">
                <span className="mr-2 font-bold text-zinc-900">
                  Design Circle
                </span>
                <Badge
                  variant="outline"
                  className="h-4 border-emerald-200 bg-emerald-50 px-1.5 py-0 text-[10px] font-bold text-emerald-700 uppercase"
                >
                  Community
                </Badge>
                <span className="ml-2 text-xs font-medium text-zinc-500">
                  1d ago
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed font-medium text-zinc-700">
                Collected 60+ onboarding critiques from product teams. We turned
                them into reusable mobile-first UI patterns.
              </p>
              <div className="mt-2 cursor-pointer text-xs font-bold text-emerald-700">
                #DesignReview
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs font-bold">
                <div className="flex cursor-pointer items-center text-zinc-500 transition-colors hover:text-red-500">
                  <Flame className="mr-1.5 h-4 w-4" /> 94
                </div>
                <div className="flex cursor-pointer items-center text-zinc-500 transition-colors hover:text-blue-500">
                  <MessageSquare className="mr-1.5 h-4 w-4" /> 27
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const TrendingContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-2 mx-auto max-w-3xl space-y-5 pb-20 duration-500">
      <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="mb-2 flex items-center gap-2 text-primary">
          <TrendingUp className="h-5 w-5" />
          <span className="text-sm font-bold tracking-wide uppercase">
            Trending Now
          </span>
        </div>
        <h2 className="text-2xl font-bold text-zinc-900">
          Most discussed build threads today
        </h2>
        <p className="mt-1 text-sm font-medium text-zinc-600">
          Topics are ranked by conversation heat, saves, and team activity in
          the last 24 hours.
        </p>
      </div>

      {trendingPosts.map((post, index) => (
        <Card key={post.title} className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <Badge
                variant="outline"
                className="border-zinc-200 bg-zinc-50 text-zinc-700"
              >
                <Hash className="mr-1 h-3 w-3" /> Top {index + 1}
              </Badge>
              <div className="flex items-center gap-3 text-xs font-bold text-zinc-500">
                <span className="flex items-center gap-1 text-orange-600">
                  <Flame className="h-3.5 w-3.5" /> {post.heat}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-3.5 w-3.5" /> {post.replies}
                </span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-zinc-900">{post.title}</h3>
            <p className="mt-2 text-sm font-semibold text-primary">
              {post.tag}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const ExploreCommunitiesContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-2 mx-auto max-w-5xl space-y-6 pb-20 duration-500">
      <div>
        <h2 className="text-2xl font-bold text-zinc-900">
          Explore Communities
        </h2>
        <p className="mt-1 text-sm font-medium text-zinc-600">
          Join spaces where teams are actively shipping projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {exploreCommunities.map((community) => (
          <Card
            key={community.name}
            className="border-zinc-200 bg-white shadow-sm"
          >
            <CardContent className="space-y-4 p-5">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-zinc-900">
                  {community.name}
                </h3>
                <Badge
                  variant="secondary"
                  className="bg-slate-100 text-zinc-700"
                >
                  {community.members} members
                </Badge>
              </div>
              <p className="text-sm font-medium text-zinc-600">
                {community.focus}
              </p>
              <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
                <span className="text-xs font-semibold text-zinc-500">
                  {community.projects}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 text-xs font-bold"
                >
                  Join
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const MyCommunitiesContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-2 mx-auto max-w-4xl space-y-4 pb-20 duration-500">
      <div>
        <h2 className="text-2xl font-bold text-zinc-900">My Communities</h2>
        <p className="mt-1 text-sm font-medium text-zinc-600">
          Your joined spaces with recent activity and unread updates.
        </p>
      </div>

      {myCommunities.map((community) => (
        <Card
          key={community.name}
          className="border-zinc-200 bg-white shadow-sm"
        >
          <CardContent className="p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-zinc-900">
                  {community.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-zinc-600">
                  {community.topic}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="border-zinc-200 bg-zinc-50 text-zinc-700"
                >
                  {community.role}
                </Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
                  {community.unread} unread
                </Badge>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 text-xs font-bold"
                >
                  Open
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const ProjectsContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-2 mx-auto max-w-4xl space-y-4 pb-20 duration-500">
      <div>
        <h2 className="text-2xl font-bold text-zinc-900">Project Workspace</h2>
        <p className="mt-1 text-sm font-medium text-zinc-600">
          Track your active workstreams and upcoming milestones.
        </p>
      </div>

      {workspaceProjects.map((project) => (
        <Card key={project.name} className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-zinc-900">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-zinc-600">
                  {project.update}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-slate-100 text-zinc-700"
                >
                  {project.stage}
                </Badge>
                <Button size="sm" className="h-8 text-xs font-bold">
                  Open Workspace
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const ProfileContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-2 mx-auto max-w-5xl space-y-6 pb-20 duration-500">
      <Card className="overflow-hidden border-zinc-200 shadow-sm">
        <div className="h-32 bg-gradient-to-r from-primary/20 via-sky-100 to-emerald-100" />
        <CardContent className="-mt-10 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex items-end gap-4">
              <Avatar className="h-20 w-20 border-4 border-white shadow-md">
                <AvatarImage src="/demo/avatar1.png" />
                <AvatarFallback className="bg-primary/10 text-xl font-bold text-primary">
                  AM
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-zinc-900">
                  Ayaan Mehta
                </h2>
                <p className="text-sm font-medium text-zinc-600">
                  Full-stack builder focused on product-led collaboration tools.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
                    Top Contributor
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-zinc-200 text-zinc-700"
                  >
                    7 communities
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-zinc-200 text-zinc-700"
                  >
                    3 active projects
                  </Badge>
                </div>
              </div>
            </div>

            <Button variant="outline" className="font-bold">
              Edit Demo Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="p-5">
            <div className="text-xs font-bold tracking-wide text-zinc-500 uppercase">
              Contribution Score
            </div>
            <div className="mt-2 text-3xl font-bold text-zinc-900">847</div>
          </CardContent>
        </Card>
        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="p-5">
            <div className="text-xs font-bold tracking-wide text-zinc-500 uppercase">
              Projects Shipped
            </div>
            <div className="mt-2 text-3xl font-bold text-zinc-900">12</div>
          </CardContent>
        </Card>
        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="p-5">
            <div className="text-xs font-bold tracking-wide text-zinc-500 uppercase">
              Team Collaborators
            </div>
            <div className="mt-2 text-3xl font-bold text-zinc-900">34</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="space-y-4 p-5">
            <h3 className="text-lg font-bold text-zinc-900">Recent Wins</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-lg border border-zinc-100 bg-zinc-50 p-3">
                <Rocket className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Shipped realtime notifications module
                  </p>
                  <p className="text-xs font-medium text-zinc-500">
                    2 days ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-zinc-100 bg-zinc-50 p-3">
                <CalendarDays className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Led weekly community build review
                  </p>
                  <p className="text-xs font-medium text-zinc-500">
                    5 days ago
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="space-y-4 p-5">
            <h3 className="text-lg font-bold text-zinc-900">Current Focus</h3>
            <p className="text-sm font-medium text-zinc-600">
              Building a collaborative product workflow stack for student and
              independent teams.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Supabase",
                "Tailwind",
                "Product Thinking",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-slate-100 text-zinc-700 hover:bg-slate-100"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  return (
    <div
      className="relative mx-auto mt-12 mb-32 h-[800px] w-full max-w-6xl"
      id="interactive-preview"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateX: 10, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1, type: "spring", bounce: 0.2 }}
        style={{ transformPerspective: 1200 }}
        className="relative h-full w-full overflow-visible"
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1),_0_0_80px_rgba(59,130,246,0.1)]">
          <div className="flex h-12 flex-shrink-0 items-center border-b border-zinc-200 bg-slate-50 px-4">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="mx-auto flex items-center rounded-md border border-zinc-200 bg-white px-4 py-1.5 font-mono text-xs font-medium text-zinc-500 shadow-sm">
              colrnx.com/{activeTab}
            </div>
          </div>

          <div className="flex h-[calc(100%-3rem)] overflow-hidden">
            <div className="flex w-64 flex-shrink-0 flex-col border-r border-zinc-200 bg-slate-50 py-6">
              <div className="mb-8 flex items-center px-6 text-xl font-black text-zinc-900">
                <Compass className="mr-2 h-6 w-6 text-primary" /> Colrnx
              </div>

              <div className="flex-1 space-y-1 overflow-y-auto px-3">
                {renderSidebarItem("dashboard", LayoutDashboard, "Dashboard")}

                <div className="mt-6 mb-2 px-3 text-xs font-bold tracking-wider text-zinc-400 uppercase">
                  Feed
                </div>
                {renderSidebarItem("home", Rss, "Home")}
                {renderSidebarItem("trending", TrendingUp, "Trending")}

                <div className="mt-6 mb-2 px-3 text-xs font-bold tracking-wider text-zinc-400 uppercase">
                  Community
                </div>
                {renderSidebarItem("explore", Globe, "Explore")}
                {renderSidebarItem("my-communities", Users, "My Communities")}

                <div className="mt-6 mb-2 px-3 text-xs font-bold tracking-wider text-zinc-400 uppercase">
                  Workspace
                </div>
                {renderSidebarItem("projects", FolderGit2, "Projects")}
              </div>

              <div className="mt-auto border-t border-zinc-200 bg-slate-50 px-4 pt-4">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                    className="flex w-full items-center rounded-md border border-transparent p-2 transition-all hover:border-zinc-200 hover:bg-white hover:shadow-sm"
                  >
                    <Avatar className="h-9 w-9 border border-zinc-200">
                      <AvatarImage src="/demo/avatar1.png" />
                      <AvatarFallback className="bg-primary/10 font-bold text-primary">
                        AM
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-3 flex-1 overflow-hidden text-left">
                      <div className="truncate text-sm font-bold text-zinc-900">
                        Ayaan Mehta
                      </div>
                      <div className="truncate text-xs font-medium text-zinc-500">
                        ay***@colrnx.app
                      </div>
                    </div>
                    <ChevronUp
                      className={`h-4 w-4 text-zinc-400 transition-transform ${
                        isProfileMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isProfileMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 bottom-full left-0 mb-2 rounded-lg border border-zinc-200 bg-white p-1 shadow-lg"
                      >
                        <button
                          type="button"
                          onClick={() => setTab("profile")}
                          className="flex w-full items-center rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-slate-50 hover:text-zinc-900"
                        >
                          <UserCircle2 className="mr-2 h-4 w-4" />
                          Profile
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div
              ref={contentRef}
              onScroll={handleScroll}
              className="custom-scrollbar relative flex-1 overflow-y-auto bg-white p-6 md:p-8"
            >
              {activeTab === "dashboard" && <DashboardContent />}
              {activeTab === "home" && <HomeFeedContent />}
              {activeTab === "trending" && <TrendingContent />}
              {activeTab === "explore" && <ExploreCommunitiesContent />}
              {activeTab === "my-communities" && <MyCommunitiesContent />}
              {activeTab === "projects" && <ProjectsContent />}
              {activeTab === "profile" && <ProfileContent />}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolled ? 0 : [0, 1, 1, 0] }}
            transition={
              isScrolled
                ? { duration: 0.2 }
                : { duration: 4, delay: 2, times: [0, 0.2, 0.8, 1] }
            }
            className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-bold text-white shadow-xl"
          >
            <ChevronDown className="mr-2 h-4 w-4" /> Try scrolling inside
          </motion.div>
        </div>

        {activeTab === "dashboard" && (
          <>
            <AnnotationArrow
              isVisible={!isScrolled}
              delay={0.4}
              label="Switch sections from this sidebar"
              labelPosition="max-w-[180px] text-right"
              pathD="M 10 14 C 42 12, 78 30, 112 54"
              className="top-[23%] -left-44"
            />
            <AnnotationArrow
              isVisible={!isScrolled}
              delay={1}
              label="Live metrics update as your team ships"
              labelPosition="max-w-[180px] text-left"
              pathD="M 110 14 C 84 14, 44 30, 10 56"
              className="top-[39%] -right-44"
            />
          </>
        )}

        {(activeTab === "home" || activeTab === "trending") && (
          <>
            <AnnotationArrow
              isVisible={!isScrolled}
              delay={0.4}
              label="Feed updates from builders and communities"
              labelPosition="max-w-[190px] text-right"
              pathD="M 10 14 C 40 12, 78 26, 112 52"
              className="top-[21%] -left-44"
            />
            <AnnotationArrow
              isVisible={!isScrolled}
              delay={1}
              label="Trending ranks discussions by real activity"
              labelPosition="max-w-[190px] text-left"
              pathD="M 110 14 C 82 16, 44 30, 10 54"
              className="top-[47%] -right-44"
            />
          </>
        )}
      </motion.div>
    </div>
  )
}
