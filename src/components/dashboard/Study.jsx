import React from "react";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { useNavigate } from "react-router-dom";
import useSet from "../../hooks/useSet";

export default function Study({ id }) {
    const navigate = useNavigate();
    const { setFlashcardSet } = useSet();

    const handleClick = () => { 
        setFlashcardSet(id);
        navigate("/study/");
    }

    return (
        <button onClick = {handleClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 mx-2 rounded-full">
            <LocalLibraryIcon /> Study
        </button>
    );
}