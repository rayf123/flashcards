import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import AddBoxIcon from '@mui/icons-material/AddBox';
import CreateSetDialog from "./CreateSetDialog";

export default function CreateSet({setFlashcardSets}) {
    const [isOpen, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { auth } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const headers = new Headers({
            "Content-Type":"application/json",
            "Authorization":`Bearer ${auth.accessToken}`
        })
        try {
            let response = await fetch("/dashboard/create/", {
                method: "POST",
                credentials: "include",
                headers: headers,
                body: JSON.stringify({username: auth.user, title, description}),
            });
            response = await response.json();
            setFlashcardSets(response);
            setTitle(""); setDescription(""); setOpen(false);
        } catch (err) {
            console.error(err)
        }
    }

    const data = { handleSubmit, title, setTitle, description, setDescription }

    return (
        <>
            <button type = "button" 
            class = "text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 font-medium text-sm px-5 py-2.5 m-2" onClick = {() => setOpen(true)}>
                <AddBoxIcon /> 
                <span class = "font font-bold"> Create a Set</span>
            </button>
            <CreateSetDialog isOpen={isOpen} setOpen={setOpen} data = {data} />
        </>
    );  
}