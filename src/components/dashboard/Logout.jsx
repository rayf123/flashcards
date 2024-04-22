import React from "react";
import useAuth from "../../hooks/useAuth";
import LogoutIcon from '@mui/icons-material/Logout';

export default function Logout() {
    const { setAuth } = useAuth();

    const logout = async () => {
        try {
            let response = await fetch("/auth/logout", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({}) //send jwt + cookie for backend to invalidate and delete

            })
            setAuth({});
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <button type = "button" 
        class = "text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 font-medium text-sm px-5 py-2.5 m-2" onClick = {() => logout()}>
            <LogoutIcon /> 
            <span class = "font font-bold"> Log out</span>
        </button>
    );
}