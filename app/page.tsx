import { Metadata } from "next"
import Link from "next/link"
import HeroSection from "@/components/demo/HeroSection"
import ProblemSection from "@/components/demo/ProblemSection"
import SolutionLoopSection from "@/components/demo/SolutionLoopSection"
import InteractivePreviewSection from "@/components/demo/InteractivePreviewSection"
import ActorShowcaseSection from "@/components/demo/ActorShowcaseSection"
import ImpactSection from "@/components/demo/ImpactSection"
import FeatureCarouselSection from "@/components/demo/FeatureCarouselSection"
import QuoteSection from "@/components/demo/QuoteSection"
import BuildersSection from "@/components/demo/BuildersSection"
import FinalCtaSection from "@/components/demo/FinalCtaSection"

export const metadata: Metadata = {
  title: "Demo Showcase | Colrnx",
  description:
    "The platform where builders find their team, build together, and grow careers through what they ship.",
}

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-primary/20 selection:text-zinc-900">
      <div className="fixed top-4 left-4 z-50 sm:top-6 sm:left-6">
        <Link
          href="/demo"
          aria-label="Colrnx Home"
          className="inline-flex items-center gap-0"
        >
          <span
            aria-hidden="true"
            className="h-15 w-15 bg-orange-500"
            style={{
              WebkitMaskImage: "url('/logo-navbar.png')",
              maskImage: "url('/logo-navbar.png')",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
          <span className="text-2xl font-semibold tracking-tight text-black sm:text-4xl">
            Colrnx
          </span>
        </Link>
      </div>
      <HeroSection />
      <ProblemSection />
      <SolutionLoopSection />
      <InteractivePreviewSection />
      <ActorShowcaseSection />
      <ImpactSection />
      <FeatureCarouselSection />
      <QuoteSection />
      <BuildersSection />
      <FinalCtaSection />
    </main>
  )
}
