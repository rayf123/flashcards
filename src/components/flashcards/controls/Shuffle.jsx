import React, { useState } from "react";
import ShuffleIcon from '@mui/icons-material/Shuffle';

export default function Shuffle() {
    const [selected, setSelected] = useState(false);
    const [style, setStyle] = useState("text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 font-medium text-sm px-5 py-2.5");

    function handleClick() {
        setSelected((prev) => {
            return !prev
        })
        setStyle(() => {
            return selected ? "text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 font-medium text-sm px-5 py-2.5" : "ring-4 ring-gray-300 text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 font-medium text-sm px-5 py-2.5";
        })
    }

    function shuffleArray(arr){ //shuffles elements of an array based on index (in place)
        for (let i = arr.length-1; i > 0 ; i --){
            let j = Math.floor(Math.random() * (i+1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    return (
        <button className = {style} onClick = {handleClick}>
            <ShuffleIcon />
        </button>
    );
}
