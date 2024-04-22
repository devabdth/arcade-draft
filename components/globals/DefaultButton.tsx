import React from "react";

type DefaultButtonProps= {
    title: string;
    variant: string;
    onClick: ()=> void;
}
export default (props: DefaultButtonProps) => {
    return (
        <button
        className={props.variant === "primary" ? 
        "px-4 py-2 bg-primary text-black font-secondary font-regular rounded-3xl transition-all hover:bg-transparent hover:text-primary border-2 border-primary"
        :"px-4 py-2 text-primary font-secondary font-regular rounded-3xl border-2 border-primary"}
        onClick={props.onClick}
        >{props.title}</button>
    );
}
