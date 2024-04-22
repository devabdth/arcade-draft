"use client"
import { HeroSection, ProgramsSection, StoreSection,
         EpisodesSection, FounderSection } from "@/components/home";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <main>
        <ParallaxProvider>
            <HeroSection />
        </ParallaxProvider>
        <ProgramsSection />
        <StoreSection />
        <EpisodesSection />
        <FounderSection />
    </main>
  );
}
