import { getCookie } from "@/utils/cookies";
import { useNavigate } from "react-router-dom";
import { Button } from "rg-dst";

export default function NotFound() {
    const authToken = getCookie('auth_token')
    const navigate = useNavigate()

    return (
        <div className="w-full h-screen flex-center flex-col gap-8">
            <h3 className="text-3xl font-semibold">صفحه مورد نظر یافت نشد</h3>
            <Button
                variant="secondaryColor"
                onClick={() => navigate(authToken ? '/dashboard' : '/auth/login')}
            >
                {
                    authToken ? 'مراجعه به داشبورد' : 'مراجعه به لاگین'
                }
            </Button>
        </div>
    )
}
