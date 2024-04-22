import React from "react";
import Image from "next/image";
import { DefaultButton } from "../globals";
import { Products } from "@/prefs/Consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const StoreSection= () => {
    return (
        <section className="w-full h-[80vh] px-28 py-6 flex flex-col items-center justify-center gap-2">
            <h3 className="text-5xl font-primary text-primary font-black">Gear Up & Go</h3>
            <p className="text-xl font-secondary text-secondary font-regular">Essential Tools to remember us everywhere!</p>
            <div className="w-full h-full flex flex-row items-center justify-between gap-4 my-[2vh]">
                {Products.map((product, i) => (
                        <div key={i} className="w-full h-full relative rounded-xl overflow-hidden shadow-orange-600/25 shadow-xl">
                            <div className="w-full h-full absolute bg-[#272727] top-0"></div>
                            <Image
                                alt="Product Card Background" src="/product-background.png"
                                width={512} height={512}
                                className="w-full h-full absolute top-0 object-cover object-center opacity-25"
                            ></Image>
                            <div className="w-[150%] rounded-full absolute bg-[#FE7A00] aspect-square -top-[60%] -right-[45%]"></div>
                            <Image
                                width={512} height={512}
                                alt={product.title} src={product.image}
                                className="w-[80%] object-contain object-center absolute top-[5%] left-[50%] -translate-x-[50%]"
                            ></Image>
                            <div className="w-full h-[45%] bottom-0 left-0 absolute flex items-start justify-start flex-col px-2 py-1">
                                <h4 className="text-md text-primary font-secondary font-bold">{product.title}</h4>
                                <p className="text-sm text-secondary font-secondary font-light">{product.description.substring(0, 50)+"..."}</p>
                                <p className="text-orange-500 font-secondary font-bold text-lg">{product.newPrice}{" "}<span className="text-secondary text-sm line-through decoration-red-500">{product.previousPrice}</span></p>
                                <div className="w-full h-full flex flex-row items-end justify-end">
                                    <div className="w-[40px] h-[40px] rounded-lg cursor-pointer bg-[#FE7A00] flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCartPlus} color="#272727" size="lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
            <DefaultButton title="View More" variant="primary" onClick={() => {}} />
        </section>
    )
}

export default StoreSection
