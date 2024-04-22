import React from "react";

export default function ToggleHorizontalCard({displayHorizontalCards, setDisplayHorizontalCards}) {

    function handleClick() {
        setDisplayHorizontalCards(!displayHorizontalCards);
    }

    return (
        <label class="ml-auto mr-0 inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked = {displayHorizontalCards} onChange = {handleClick}/>
            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
    );
}