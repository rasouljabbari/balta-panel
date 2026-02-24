import { RAHKAR_GOSTARAN_URL } from "@/utils/config";
import { Link } from "react-router-dom";

export default function LoginPageFooter() {
    return (
        <div className="w-full p-8">
            <p className="text-sm leading-5 text-gray-modern-600 text-center">
                       طراحی و توسعه توسط شرکت  <Link
                    to={RAHKAR_GOSTARAN_URL}
                    target="_blank"
                    className="text-gray-modern-900 font-medium hover:underline">راهکارگستران</Link> 
            </p>
        </div>
    )
}
