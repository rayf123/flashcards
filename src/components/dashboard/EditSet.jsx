import React, {useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import EditSetDialog from "./EditSetDialog";
import useAuth from "../../hooks/useAuth";

export default function EditSet({setFlashcardSets, id}) {
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
            let response = await fetch("/dashboard/edit/", {
                method: "PATCH",
                credentials: "include",
                headers: headers,
                body: JSON.stringify({username: auth.user, title, description, id}),
            });
            response = await response.json();
            setFlashcardSets(response);
            setTitle(""); setDescription(""); setOpen(false);
        } catch (err) {
            console.error(err);
        }
    }

    const data = { handleSubmit, title, setTitle, description, setDescription }

    return (
        <>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 mx-2 rounded-full" onClick = {() => setOpen(true)}>
                <EditIcon /> Edit
            </button>
            <EditSetDialog isOpen = {isOpen} setOpen = {setOpen} data = {data} />
        </>
    );
}