"use client"
import { HeroSection, ProgramsSection, StoreSection,
         EpisodesSection, PartnersSection, FounderSection } from "@/components/home";
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
        <PartnersSection />
        <FounderSection />
    </main>
  );
}
