import { twMerge } from "tailwind-merge"


export default function Container ({children ,className, ...props}) {
     return (
        <div className={twMerge('h-full flex flex-col text-left gap-3', className)} {...props}>
            {children}
        </div>
    )
}