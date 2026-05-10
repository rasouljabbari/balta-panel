import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import type { ViewDetailsLinkProps } from "@/types/ui/type";

export default function ViewDetailsLink({ 
    to, 
    text = "مشاهده جزئیات",
    className = "" 
}: ViewDetailsLinkProps) {
    return(
        <Link 
            to={to} 
            className={`flex items-center gap-2 text-sm font-medium text-gray-light-600 hover:text-gray-dark-800 transition-all duration-200 ease-in-out ${className}`}
        >
            {text}
            <ChevronLeft className="w-5 h-5 text-gray-light-700" />
        </Link>
    )
}