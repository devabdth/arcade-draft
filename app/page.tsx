"use client"
import { HeroSection, ProgramsSection, StoreSection,
         EpisodesSection, FounderSection } from "@/components/home";
import { ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="hidden xl:block">
        <ParallaxProvider>
            <HeroSection />
        </ParallaxProvider>
        <ProgramsSection />
        <StoreSection />
        <EpisodesSection />
        <FounderSection />
    </main>
    <main className="block xl:hidden">
        <div className="w-full h-[100vh] flex-col flex items-center justify-center gap-4">
         <Image
            className="w-[50%] h-[50vw] max-w-[450px] max-h-[450px] object-contain object-center"
            alt="Computer" src="/computer.png"
            width={750} height={750}
         ></Image>
        <p className="font-secondary text-[3vw]">For a better experience, Please use your desktop!</p>

        </div>
    </main>
    </>
  );
}
