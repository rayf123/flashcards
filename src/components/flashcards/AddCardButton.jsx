import React, { useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddCardDialogBox from "./AddCardDialogBox";

export default function AddCardButton() {
    const [isOpen, setOpen] = useState(false); 

    return (
        <>
            <button type="button" onClick = {() => setOpen(true)}
            class="text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 font-medium text-sm px-5 py-2.5 m-2">
                <span class = "font font-bold">Add a card... </span>
                <AddBoxIcon />
            </button>
            <AddCardDialogBox isOpen = {isOpen} setOpen = {setOpen} />
        </>
    );
}