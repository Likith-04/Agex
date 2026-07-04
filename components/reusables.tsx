import React from "react";

export const GrayTitle = ({ children}: {children: React.ReactNode}) => {
    return <span className="text-white/90">{children}</span>
};

export const SlateTitle = ({ 
    children,
     className = "",
    }: {
        children: React.ReactNode;
         className?: string
        }) => {
    return (
    <span className={`bg-linear-to-br font-serif from-zinc-300 via-gray-500 to-slate-700 bg-clip-text text-transparent ${className}`}>
        {children}
    </span>
)};

export const SectionLabel = ({ 
    children,
    }: {
        children: React.ReactNode;
        }) => {
    return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 tracking-[0.14em] uppercase mb-4"  >
        <span className="w-4 h-px bg-slate-700"/>
        {children}
        <span className="w-4 h-px bg-slate-700"/>

    </p>
)};

export const SectionHeading = ({
    gray,
    slate,
}:{
    gray:string;
    slate:string;
}) => {
    return (
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1,1] tracking-tight">
            <GrayTitle>{gray}</GrayTitle> 
            <br/>
            <SlateTitle>{slate}</SlateTitle>
        </h2>
    );
};