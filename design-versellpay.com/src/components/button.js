import { twMerge } from "tailwind-merge"


export function Button ({children, className, ...props}){
    return (
        <button className={twMerge('w-[100px] h-[50px] flex rounded-xl items-center justify-center cursor-pointer', className)} {...props}>
            {children}
        </button>
    )
}