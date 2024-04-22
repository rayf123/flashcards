import React from "react";
import EditIcon from '@mui/icons-material/Edit';

export default function EditCard() {

    function handleClick() {

    }

    return (
        <button type="button" onClick = {handleClick}
        class="text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 font-medium text-sm px-5 py-2.5">
            <EditIcon />
        </button>

    );
}