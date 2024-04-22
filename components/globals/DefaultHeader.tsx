"use client"
import { NavTabs } from "@/prefs/Consts";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { faCartShopping, faPerson, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DefaultHeader= () => {
    const pathName= usePathname();
    return (
        <nav className="w-full h-[64px] bg-background/50 backdrop-blur-xl flex flex-row items-center
        justify-start lg:justify-between px-4 lg:px-28 fixed top-0 z-[500]
        ">
            <Link className="font-primary text-gradient font-black capitalize" href="/">Arcade</Link>
            <div className="w-full items-center justify-center gap-4 hidden lg:flex flex-row">
                {NavTabs.map((tab, i) => 
                    <Link href={tab.href} key={i} className={`font-secondary ${pathName === tab.href? "text-primary":"text-secondary"} transition-all hover:text-primary`}>
                        {tab.label}
                    </Link>
                )}
            </div>
            <div className="h-full items-center hidden lg:flex flex-row gap-4 justify-end">
                <Link href="/cart/" >
                    <FontAwesomeIcon icon={faCartShopping} width={24} height={24} color="#f9f9f9" />
                </Link>
                <Link href="/search/" >
                    <FontAwesomeIcon icon={faSearch} width={24} height={24} color="#f9f9f9" />
                </Link>
                <Link href="/profile/" >
                    <FontAwesomeIcon icon={faUser} width={24} height={24} color="#f9f9f9" />
                </Link>
            </div>
        </nav>
    )
}

export default DefaultHeader
