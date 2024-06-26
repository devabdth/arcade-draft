import React from "react";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { DefaultButton } from "../globals";

const ProgramsSection= () => {
    return (
        <section className="w-full lg:h-[90vw] md:h-[120vw] h-[330vw] flex relative font-secondary">
            <Image className="h-full w-[40%] absolute left-0 top-0 rotate-180 object-fill object-top hue-rotate-180" src="/programs-light.png" alt="Neon Light" width={964} height={1258}>
            </Image>
            <Image className="h-full w-[40%] absolute left-0 top-0 rotate-180 object-fill object-top hue-rotate-180" src="/programs-light.png" alt="Neon Light" width={964} height={1258}>
            </Image>
           <Image className="h-full w-[40%] absolute right-0 top-0 object-fill hue-rotate-30 object-top" src="/programs-light.png" alt="Neon Light" width={964} height={1258}>
            </Image>
           <Image className="h-full w-[40%] absolute right-0 top-0 hue-rotate-30 object-fill object-top" src="/programs-light.png" alt="Neon Light" width={964} height={1258}>
            </Image>
            <div className="w-full h-full flex flex-col justify-start lg:gap-4 md:gap-2 gap-4 items-center lg:px-28 xl:px-28 lg:py-14 md:px-8 md:py-4 px-4 py-2 top-0 absolute">
                <h2 className="text-white lg:bold-40 bold-52 text-center text-5xl font-primary">Featured Programs</h2>
                <p className="text-white/50 regular-12 text-center">Our Must-See Programs</p>
                <div className="w-full lg:h-[40%] md:h-[50%] h-[33%] flex flex-row border-[1px] border-white/50 rounded-xl relative overflow-hidden bg-gray-20/10 backdrop-blur-2xl">
                    <div className="w-full h-full top-0 left-0 relative">
                        <div className="w-full h-full absolute">
                            <Image
                                src="/hero-light.png" alt="Gradient Neon Light"
                                width={1417} height={1417}
                                className="w-[140%] h-[140%] lg:w-[110%] lg:h-[110%] object-center object-cover absolute -top-[20%] lg:-top-[10%] lg:-left-[10vw] hue-rotate-90 blur-2xl opacity-25"
                            ></Image>
                        </div>
                        <div className="w-full h-full absolute">
                            <Image
                                src="/prog-one-image.png" alt="Robot"
                                width={1920} height={1440}
                                className="lg:w-[70%] md:w-[70%] w-full h-full absolute top-0 -left-[2.5vw] lg:object-contain object-cover object-center"
                            ></Image>
                        </div>
                    </div>
                    <div className="lg:w-[40%] xl:w-[30%] md:w-[50%] md:h-full lg:h-full w-full h-[40%] lg:from-black/0 md:from-black/0 
                    bg-gradient-to-t from-black/90 to-black/0 absolute bottom-0 lg:top-0 xl:right-[10%] lg:right-[5%] md:-right-[5%] right-0 flex flex-col px-12 py-6 items-start justify-center
                    font-secondary">
                        <h3 className="text-white font-bold text-3xl">Erza3</h3>
                        <p className="text-white/50 regular-12 lg:my-[1vw] md:my-[2vw]">Only Fun, No Place for serious!</p>
                        <div className="w-full lg:max-h-[50%] max-h-[25vw] flex lg:flex-col md:flex-col flex-row flex-wrap items-center 
                        lg:items-start md:items-start lg:justify-start gap-4 justify-center mt-[16px] lg:mt-0 md:mt-0 lg:gap-0 md:gap-0">
                            <div className="lg:w-full md:w-full w-[45%] flex flex-row items-center justify-start gap-2">
                                <FontAwesomeIcon icon={faCheckCircle} color="#f9f9f9" width={32} height={32} />
                                <p className="text-white regular-16">Live Streams</p>
                            </div>
                            <div className="bg-gradient-to-r from-gray-10/0 via-gray-10/50 to-gray-10/0 w-full h-[1px] lg:my-[16px] hidden md:flex lg:flex xl:flex"></div>
                            <div className="lg:w-full md:w-full w-[45%] flex flex-row items-center justify-start gap-2">
                                <FontAwesomeIcon icon={faCheckCircle} color="#f9f9f9" width={32} height={32} />
                                <p className="text-white regular-16">European Football Coverage</p>
                            </div>
                            <div className="bg-gradient-to-r from-gray-10/0 via-gray-10/50 to-gray-10/0 w-full h-[1px] lg:my-[16px] hidden md:flex lg:flex xl:flex"></div>
                            <div className="lg:w-full md:w-full w-[45%] flex flex-row items-center justify-start gap-2">
                                <FontAwesomeIcon icon={faCheckCircle} color="#f9f9f9" width={32} height={32} />
                                <p className="text-white regular-16">Interaction Programs: Raz3 El-Gomhour</p>
                            </div>
                        </div>
                        <div className="w-[150%] items-center justify-end flex flex-row mt-[10vh]">
                            <DefaultButton title="View Playlist" variant="primary" onClick={ () => { window.open("/"); }} />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[40%] flex lg:flex-row md:flex-row flex-col items-center lg:justify-between md:justify-between justify-center lg:gap-4 md:gap-4 gap-6">
                    <div className="lg:w-[50%] md:w-[50%] w-full lg:h-full md:h-full h-[50%] border-2 border-gray-10/25 relative rounded-xl overflow-hidden">
                        <Image className="w-full h-full absolute top-0 object-cover " src="/prog-two-image.jpg" width={1260} height={1469} alt="Beta3 Aflam"></Image>
                        <div className="w-full h-[60%] absolute bottom-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/75 to-black/0 px-4 py-6">
                            <h3 className="text-white text-3xl">Beta3 Aflam</h3>
                            <p className="regular-12 text-white/50">Movies Reviews, Events Coverage, and yet more!</p>
                            <div className="w-full items-center justify-end flex flex-row mt-[4vh]">
                                <FontAwesomeIcon icon={faChevronCircleRight} width={64} height={64} size="2xl" color="#f9f9f9" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:w-[50%] md:w-[50%] w-full lg:h-full lg:bg-gray-10/10 md:bg-gray-10/10 md:h-full h-[50%] border-2 border-gray-10/25 rounded-xl overflow-hidden flex lg:flex-col-reverse md:flex-col-reverse
                    items-center justify-between lg:px-4 lg:py-4 md:px-4 md:py-4 px-0 py-0 relative lg:static md:static">
                        <div className="lg:h-[60%] md:h-[50%] h-full w-full flex items-center justify-center rounded-2xl absolute lg:static md:static lg:bg-black md:bg-black">
                            <Image className="w-full h-full object-cover rounded-xl lg:scale-x-[1] scale-x-[-1]" src="/prog-three-image.png" width={1034} height={800} alt="Marwan Serry"></Image>
                        </div>
                        <div className="lg:h-[40%] md:h-[40%] h-[70%] bg-gradient-to-t from-black/75 to-black/0 lg:bg-transparent md:bg-transparent lg:from-
                            transparent md:from-transparent lg:to-transparent md:to-transparent w-full absolute bottom-0 md:static lg:static px-4 py-2 md:px-0 md:py-0 lg:px-0 lg:py-0
                            flex flex-col items-start justify-end lg:justify-start md:justify-start gap-3 lg:gap-2 md:gap-3
                            ">
                            <h3 className="text-white font-bold text-3xl">Ma3 Marwan Serry</h3>
                            <p className="text-white/50 regular-12">A businessman by day, A Entertainment program host by night! Checkout the last episodes of Casino El-Al3ab By Marwan Serry!</p>
                            <div className="w-full items-center justify-end flex flex-row mt-[4vh]">
                                <FontAwesomeIcon icon={faChevronCircleRight} width={64} height={64} size="2xl" color="#f9f9f9" />
                            </div>
                            <div className="w-full lg:h-[4vw] md:h-[8vw] h-[10vw] flex flex-row items-center justify-between md:hidden">
                                <div className="h-[80%] aspect-square bg-gray-600/20 rounded-xl flex flex-col items-center justify-center">
                                    <Image src="/feature-icon.svg" width={24} height={24} alt="Feature Icon"></Image>
                                </div>
                                <div className="h-[90%] aspect-square bg-gray-600/50 rounded-xl flex flex-col items-center justify-center">
                                    <Image src="/feature-icon-one.svg" width={28} height={28} alt="Feature Icon"></Image>
                                </div>
                                <div className="h-full aspect-square lg:bg-gray-950 bg-gray-600/75 rounded-xl flex flex-col items-center justify-center">
                                    <Image src="/feature-icon-two.svg" width={32} height={32} alt="Feature Icon"></Image>
                                </div>
                                <div className="h-[90%] aspect-square bg-gray-600/50 rounded-xl flex flex-col items-center justify-center">
                                    <Image src="/feature-icon-three.svg" width={28} height={28} alt="Feature Icon"></Image>
                                </div>
                                <div className="h-[80%] aspect-square bg-gray-600/20 rounded-xl flex flex-col items-center justify-center">
                                    <Image src="/feature-icon-four.svg" width={24} height={24} alt="Feature Icon"></Image>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProgramsSection
