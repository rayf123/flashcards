import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Backward({setCardNum}) {

    function handleClick() {
        setCardNum((prevCardNum) => {
            return prevCardNum === 0 ? prevCardNum : (prevCardNum -= 1);
        });
    }

    return (
        <button type="button" onClick = {handleClick}
        class="text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 font-medium text-sm px-5 py-2.5">
            <ArrowBackIcon />
        </button>
    )
}