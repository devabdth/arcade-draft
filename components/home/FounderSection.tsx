import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { DefaultButton } from "../globals";
import { faFacebook, faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const FounderSection= () => {
    return (
        <section className="w-full lg:h-[50vw] md:h-[60vw] h-[330vw] flex relative font-secondary">
            <Image className="h-full w-[40%] absolute left-0 top-0 rotate-180 object-fill object-top hue-rotate-180" src="/programs-light.png" alt="Neon Light" width={964} height={1258}>
            </Image>
            <Image className="h-full w-[40%] absolute left-0 top-0 rotate-180 object-fill object-top hue-rotate-180" src="/programs-light.png" alt="Neon Light" width={964} height={1258}>
            </Image>
           <Image className="h-full w-[40%] absolute right-0 top-0 object-fill hue-rotate-30 object-top" src="/programs-light.png" alt="Neon Light" width={964} height={1258}>
            </Image>
           <Image className="h-full w-[40%] absolute right-0 top-0 hue-rotate-30 object-fill object-top" src="/programs-light.png" alt="Neon Light" width={964} height={1258}>
            </Image>
            <div className="w-full h-full flex flex-col justify-start lg:gap-4 md:gap-2 gap-4 items-center lg:px-28 xl:px-28 lg:py-14 md:px-8 md:py-4 px-4 py-2 top-0 absolute">
                <h2 className="text-white lg:bold-40 bold-52 text-center text-5xl font-primary">Meet Our Founder</h2>
                <p className="text-white/50 regular-12 text-center">A success story deserved to be told!</p>
                <div className="w-full lg:h-full md:h-[50%] h-[33%] flex flex-row  relative overflow-hidden bg-gray-20/10">
                    <div className="w-full h-full top-0 left-0 relative">
                        <div className="w-full h-full absolute">
                            <Image
                                src="/hero-light.png" alt="Gradient Neon Light"
                                width={1417} height={1417}
                                className="w-[140%] h-[140%] lg:w-[70%] lg:h-[70%] object-center object-fill absolute -top-[20%] lg:top-[50%] lg:-translate-y-[50%] lg:-left-[5%] hue-rotate-90 blur-2xl opacity-25"
                            ></Image>
                        </div>
                        <div className="w-full h-full absolute">
                            <Image
                                src="/founder.png" alt="Marwan Serry"
                                width={1920} height={1440}
                                className="lg:w-[40%] md:w-[70%] w-full h-full absolute top-0 left-24 lg:object-contain object-cover object-bottom border-2 rounded-xl overflow-hidden"
                            ></Image>
                        </div>
                    </div>
                    <div className="lg:w-[40%] xl:w-[40%] md:w-[50%] md:h-full lg:h-full w-full h-[40%] lg:from-black/0 md:from-black/0 
                    bg-gradient-to-t from-black/90 to-black/0 absolute bottom-0 lg:top-0 xl:right-[10%] lg:right-[5%] md:-right-[5%] right-0 flex flex-col px-12 py-6 items-start justify-center
                    font-secondary">
                        <h3 className="text-white font-bold text-3xl">Marwan Serry</h3>
                        <p className="text-white/50 regular-12 lg:my-[1vw] md:my-[2vw]">Arcade's Founder and CEO</p>
                        <div className="w-full lg:max-h-[50%] max-h-[25vw] flex lg:flex-col md:flex-col flex-row flex-wrap items-center 
                        lg:items-start md:items-start lg:justify-start gap-4 justify-center mt-[16px] lg:mt-0 md:mt-0 lg:gap-0 md:gap-0">
                            <div className="lg:w-full md:w-full w-[45%] flex flex-row items-start justify-start gap-2">
                                <FontAwesomeIcon icon={faChevronRight} color="#f9f9f9" width={32} height={32} className="mt-[2px]" />
                                <p className="text-secondary text-[12px]"><span className="text-primary">From Student to Director:</span> Marwan started small in media, eventually becoming a director.</p>
                            </div>
                            <div className="bg-gradient-to-r from-gray-10/0 via-gray-10/50 to-gray-10/0 w-full h-[1px] lg:my-[8px] hidden md:flex lg:flex xl:flex"></div>
                            <div className="lg:w-full md:w-full w-[45%] flex flex-row items-start justify-start gap-2">
                                <FontAwesomeIcon icon={faChevronRight} color="#f9f9f9" width={32} height={32} className="mt-[2px]" />
                                <p className="text-secondary text-[12px]"><span className="text-primary">A New Challenge Awaits: </span>Marwan joined a media agency's creative department, merging his media, marketing, and planning expertise.</p>
                            </div>
                            <div className="bg-gradient-to-r from-gray-10/0 via-gray-10/50 to-gray-10/0 w-full h-[1px] lg:my-[8px] hidden md:flex lg:flex xl:flex"></div>
                            <div className="lg:w-full md:w-full w-[45%] flex flex-row items-start justify-start gap-2">
                                <FontAwesomeIcon icon={faChevronRight} color="#f9f9f9" width={32} height={32} className="mt-[2px]" />
                                <p className="text-secondary text-[12px]"><span className="text-primary">"Erza" - A Viral Success Story: </span>Marwan's satirical online football show "Erza" exploded with a million views, sparking a unique buzz.</p>
                            </div>
                            <div className="bg-gradient-to-r from-gray-10/0 via-gray-10/50 to-gray-10/0 w-full h-[1px] lg:my-[8px] hidden md:flex lg:flex xl:flex"></div>
                            <div className="lg:w-full md:w-full w-[45%] flex flex-row items-start justify-start gap-2">
                                <FontAwesomeIcon icon={faChevronRight} color="#f9f9f9" width={32} height={32} className="mt-[2px]" />
                                <p className="text-secondary text-[12px]"><span className="text-primary">Arcade's Rise to Fame:</span> Marwan capitalized on "Erza's" success, transforming the platform into the beloved "Arcade" brand we know today.</p>
                            </div>
                        </div>
                        <div className="w-[100%] items-center justify-end flex flex-row mt-[10vh] gap-4">
                            <FontAwesomeIcon icon={faFacebookF} size="xl" color="#f9f9f9" />
                            <FontAwesomeIcon icon={faInstagram} size="xl" color="#f9f9f9" />
                            <FontAwesomeIcon icon={faXTwitter} size="xl" color="#f9f9f9" />
                            <FontAwesomeIcon icon={faLinkedinIn} size="xl" color="#f9f9f9" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
}

export default FounderSection
