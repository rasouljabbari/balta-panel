import { LogOutIcon } from "@/components/icons/layout-icons";
import SharedModal from "@/components/shared/custom-modal";
import { deleteAllCookie } from "@/utils/cookies";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "rg-dst";

export default function LogoutModal() {
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()

    const logoutHandler = () => {
        deleteAllCookie()
        setOpenModal(false)
        navigate('/auth/login')
    }
    return (

        <>
            <Button
                aria-label="logout"
                variant='tertiaryGray'
                onClick={() => setOpenModal(true)}
            >
                <LogOutIcon />
            </Button>

            <SharedModal
                widthClass="w-full max-w-[400px]"
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title={"خروج از حساب کاربری"}
                confirmText="خروج"
                onConfirm={logoutHandler}
            >
                <p className="text-rtext-primary-900 text-base leading-6">آیا از خروج از حساب کاربری خود مطمئن هستید؟</p>
            </SharedModal>
        </>


    )
}
