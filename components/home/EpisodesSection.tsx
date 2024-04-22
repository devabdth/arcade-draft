import { Episodes } from "@/prefs/Consts";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const EpisodesSection= () => {
    const featuredEpisode= Episodes[0];
    return (
        <section className="w-full h-[110vh] flex flex-col items-center justify-start px-28 py-14 pt-[15vh]">
            <h3 className="text-primary text-5xl font-bold font-primary">Must-See <span className="text-gradient">Episodes</span></h3>
            <p className="text-secondary text-xl font-light font-secondary">Our Latest & Greatest Episodes</p>
            <div className="w-full h-full flex flex-row items-center justify-between mt-[2vh] gap-4">
                <div className="w-[60%] h-full rounded-xl relative overflow-hidden">
                    <Image
                        src={featuredEpisode.thumbnail} alt={featuredEpisode.title}
                        width={1920} height={1920}
                        className="w-full h-full absolute top-0 left-0 object-cover object-center"
                    ></Image>
                    <div className="absolute w-full h-[60%] bg-gradient-to-t from-background to-background/0 bottom-0 px-4 py-2 items-start justify-end flex flex-col">
                        <h4 className="text-2xl text-primary font-secondary font-bold">{featuredEpisode.title}</h4>
                        <p className="text-md text-secondary font-secondary font-light">{featuredEpisode.description}</p>
                        <div className="w-full mt-[2vh] flex items-center justify-end flex-row">
                           <div className="w-[48px] h-[48px] rounded-xl bg-orange-600 flex items-center justify-center cursor-pointer">
                            <FontAwesomeIcon icon={faChevronRight} color="#111111" width={32} height={32} />
                           </div> 
                        </div>
                    </div>
                </div>
                <div className="bg-black w-[40%] h-full flex flex-col items-center justify-center gap-y-2 rounded-xl px-4 py-2">
                    {Episodes.slice(1).map((episode, i) => (
                        <div key={i} className="w-full h-full rounded-xl bg-background flex flex-row items-center justify-center gap-1 px-2 py-1">
                            <div className="w-[15vw] h-full items-center justify-center flex px-2 py-1">
                                <Image
                                    src={episode.thumbnail} alt={episode.title}
                                    width={1920} height={1920}
                                    className="w-full h-full object-cover object-center rounded-xl"
                                ></Image>
                            </div>
                            <div className="w-full h-full items-start justify-center flex flex-col gap-1">
                                <p className="text-background p-1 bg-orange-600 text-[10px] font-secondary rounded-sm font-bold">{episode.views}</p>
                                <h4 className="text-primary text-sm font-secondary font-bold">{episode.title.substring(0, 35)+"..."}</h4>
                                <p className="text-secondary text-[8px] font-secondary font-light">{episode.description.substring(0, 60)+"..."}</p>
                                <div className="w-full items-center justify-start gap-2 flex flex-row">
                                    <Image 
                                        className="w-[32px] h-[32px] rounded-full border-2 border-orange-600 object-cover object-center"
                                        src={episode.channel} alt={episode.channelName}
                                        width={32} height={32}
                                    ></Image>
                                    <p className="text-primary text-[12px] font-secondary font-light">{episode.channelName}</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} color="#EA580C" width={32} height={32} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EpisodesSection
