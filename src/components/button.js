import { twMerge } from "tailwind-merge"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function Button ({children, className, ...props}){
    return (
        <button className={twMerge('w-full h-[50px] flex rounded-xl items-center justify-center cursor-pointer', className)} {...props}>
            {children}
        </button>
    )
}

export default function ButtonLInk ({className, link, icon, ...props}){
    return(
        <span className={twMerge("w-7 h-7 rounded-sm bg-[#0f0f0f] flex items-center justify-center")} {...props}>
            <a href={link}>
                <FontAwesomeIcon icon={icon} color="#BCCF00"/>
            </a>
        </span>
    )
}