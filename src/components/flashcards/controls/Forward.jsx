import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Forward({length, setCardNum}) {

    function handleClick() {
        setCardNum((prevCardNum) => {
            return prevCardNum === length - 1 ? prevCardNum : (prevCardNum += 1);
        });
    }

    return (
        <button type="button" onClick = {handleClick}
        class="text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 font-medium text-sm px-5 py-2.5">
            <ArrowForwardIcon />
        </button>
    )
}