"use client"
import React from "react";
import Image from "next/image";
import { DefaultButton } from "../globals";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import { channels } from "@/prefs/Consts";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPlay, faShare, faStreetView, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons";

const HeroSection= () => {
    const snippetOneParallax = useParallax<HTMLDivElement>({ speed: -1000, translateY: [-300, 300, "easeInQuad"] });
    const snippetTwoParallax = useParallax<HTMLDivElement>({ speed: -1000, translateY: [-450, 450, "easeInQuad"] });
    const astronautParallax = useParallax<HTMLDivElement>({ scale: [1, 0.8, 'easeInQuad'] });
    return (
        <section className="w-full lg:h-[120vh] h-[100vh] relative overflow-hidden">
            <Image
                src="/grid.png" alt="Grid"
                width={800} height={800}
                className="w-full h-full absolute top-0 left-0 object-cover object-center opacity-25"
            >
            </Image>
            <div className="bg-gradient-to-b w-full h-[50%] top-0 absolute from-background to-background/0"></div>
            <div className="bg-gradient-to-t w-full h-[50%] absolute bottom-0 from-background to-background/0"></div>
            <Image
                alt="Neon Light" src="/hero-light.png"
                width={1417} height={1417}
                className="w-full h-[120vh] object-cover object-top absolute top-0 opacity-75"
            ></Image>
            <Image
                alt="Neon Light" src="/light-3.png"
                width={864} height={1328}
                className="w-full h-full object-cover object-top absolute top-0 left-0"
            ></Image>
            <Image
                alt="Neon Light" src="/light-1.png"
                width={1350} height={950}
                className="w-full h-full object-cover object-top absolute top-0 left-0"
            ></Image>
            <Image
                alt="Neon Light" src="/light-4.png"
                width={964} height={1825}
                className="w-full h-full object-cover object-top absolute top-0 left-0"
            ></Image>
            <div className="w-full h-[80vh] mt-[40vh] bottom-0 relative" ref={astronautParallax.ref}>
                <div className="w-[30vw] aspect-square absolute absolute-center rounded-full border-2 border-primary/5"></div>
                <div className="w-[40vw] aspect-square absolute absolute-center rounded-full border-2 border-primary/5"></div>
                <div className="w-[50vw] aspect-square absolute absolute-center rounded-full border-2 border-primary/5"></div>
                <div className="w-[60vw] aspect-square absolute absolute-center rounded-full border-2 border-primary/5"></div>
                <div className="w-[70vw] aspect-square absolute absolute-center rounded-full border-2 border-primary/5"></div>
                <Image
                    src="/astronaut.png" alt="Arcade Astronaut"
                    width={1024} height={1024}
                    className="object-cover object-top w-[50%] h-full absolute absolute-center"
                 ></Image>
                <Image
                    src="/astronaut.png" alt="Arcade Astronaut"
                    width={1024} height={1024}
                    className="object-cover object-top w-[50%] h-full absolute absolute-center blur-xl opacity-25"
                 ></Image>
            </div>
            <div className="w-full h-[30%] flex items-center justify-center absolute top-[10vh] flex-col px-28 gap-4">
                <h1 className="font-black text-7xl font-primary text-center">
                    <span className="text-3xl font-regular font-secondary tracking-[1vw]">A world of films!</span><br/>
                    Step into the <span className="inline-block relative">
                        Arcade
                        <Image
                            src="/title-curve-line.png" alt="Curve Line"
                            width={1248} height={56}
                            className="absolute top-full left-0 w-full xl:-mt-1 hue-rotate-60"
                        ></Image>
                    </span> 
                </h1>
                <p className="text-center font-secondary text-secondary text-sm px-20">
                    Arcade Films crafts captivating videos that bring your vision to life.  We don't just make movies, we create immersive experiences that resonate with your audience.  Visit our website to level up your storytelling!
                </p>
                <div className="flex flex-row items-center justify-center gap-2">
                    <DefaultButton title="View Shop" onClick={()=> {}} variant="primary" />
                    <DefaultButton title="About Us" onClick={()=> {}} variant="shadow" />
                </div>
            </div>
            <div className="w-full h-[20vw] absolute bottom-0 bg-gradient-to-b from-background/0 to-background"></div>
            <div className="absolute top-[60vh] left-28 w-[30vw] h-[30vh] rounded-md">
                <div className="w-16 h-16 rounded-full top-[50%] -translate-y-[50%] border-2 border-primary/25 right-0 absolute flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full border-2 border-primary/75 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full border-2 bg-primary flex items-center justify-center"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[40%] h-[2px] bg-primary rounded-full absolute top-[50%] -translate-y-[50%] right-8"></div>
                <div className="w-[53%] h-full absolute top-[80vh] left-0 border-[2px] border-primary rounded-3xl overflow-hidden" ref={snippetOneParallax.ref}>
                    {channels.map((channel, i) => (
                        <Link key={i} href={channel.link} className={`w-full h-[10vh] flex flex-row items-center justify-between gap-2 px-2 ${ i!== 2&& "border-b-2 border-secondary/10"}
                        transition-all backdrop-blur-sm bg-background/25 hover:bg-secondary/10
                        `}>
                            <Image
                                src={channel.icon} alt={channel.title}
                                width={64} height={64}
                                className="h-[6vh] w-[6vh] aspect-square rounded-full object-cover object-center"
                            ></Image>
                            <div className="w-full h-full items-start justify-center flex flex-col">
                                <h3 className="text-sm whitespace-nowrap">{channel.title}</h3>
                                <p className="text-secondary font-regular text-sm font-secondary">{channel.subsCount}</p>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} color="#f9f9f9" width={24} height={24} />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="absolute top-[45vh] right-28 w-[30vw] h-[30vh] rounded-md">
                <div className="w-16 h-16 rounded-full top-[50%] -translate-y-[50%] border-2 border-primary/25 left-0 absolute flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full border-2 border-primary/75 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full border-2 bg-primary flex items-center justify-center"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[40%] h-[2px] bg-primary rounded-full absolute top-[50%] -translate-y-[50%] left-8"></div>
                <div className="w-[53%] h-full absolute top-[120vh] right-0 border-[2px] border-primary rounded-3xl overflow-hidden" ref={snippetTwoParallax.ref}>
                    <div className="w-full h-[10vh] flex flex-row items-center justify-between gap-2 px-2
                        transition-all backdrop-blur-sm bg-background/25 hover:bg-secondary/10">
                            <FontAwesomeIcon icon={faUsers} width={32} height={32} color="#f9f9f9" />
                            <div className="w-full h-full items-start justify-center flex flex-col">
                                <h3 className="text-sm whitespace-nowrap font-secondary">{"> 1,000,000"}</h3>
                                <p className="text-secondary font-regular text-sm font-secondary">Subscribers on Youtube!</p>
                            </div>
                        </div>
                    <div className="w-full h-[10vh] flex flex-row items-center justify-between gap-2 px-2
                        transition-all backdrop-blur-sm bg-background/25 hover:bg-secondary/10">
                            <FontAwesomeIcon icon={faVideo} width={32} height={32} color="#f9f9f9" />
                            <div className="w-full h-full items-start justify-center flex flex-col">
                                <h3 className="text-sm whitespace-nowrap font-secondary">{"> 1,000"}</h3>
                                <p className="text-secondary font-regular text-sm font-secondary">Videos on Youtube!</p>
                            </div>
                        </div>
                    <div className="w-full h-[10vh] flex flex-row items-center justify-between gap-2 px-2
                        transition-all backdrop-blur-sm bg-background/25 hover:bg-secondary/10">
                            <FontAwesomeIcon icon={faPlay} width={32} height={32} color="#f9f9f9" />
                            <div className="w-full h-full items-start justify-center flex flex-col">
                                <h3 className="text-sm whitespace-nowrap font-secondary">{"> 1,000,000"}</h3>
                                <p className="text-secondary font-regular text-sm font-secondary">Views on Youtube!</p>
                            </div>
                        </div>

                </div>
            </div>

        </section>
    )
}

export default HeroSection
