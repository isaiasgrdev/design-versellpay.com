import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function CardIcon ({className, icon, ...props}){
    return (
        <span className={twMerge('w-[60px] h-[60px] border border-purple-600 rounded-[10px] flex items-center justify-center text-4xl' ,className)} {...props}>
            <FontAwesomeIcon icon={icon} color="#9810fa"></FontAwesomeIcon>
        </span>
    )
}