import { twMerge } from "tailwind-merge"


export function Title ({className, children}){
    return(
        <h1 className={twMerge("font-bold text-2xl text-[#BCCF00]", className)}> 
            {children} 
        </h1>
    )
}