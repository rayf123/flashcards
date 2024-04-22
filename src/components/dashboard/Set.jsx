import React from "react";
import Study from "./Study";
import EditSet from "./EditSet";

export default function Set({title, description, id, setFlashcardSets}) {
    return (
        <div class="relative inline-block text-center text-pretty h-72 w-80 max-w-xl m-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50">
            <h5 class="mb-2 break-words text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <br />
            <p class="text-xl break-words tracking-tight text-gray-900 dark:text-white font">
                {description}
            </p> 
            <div class = "absolute inset-x-0 bottom-0">   
                <Study id = {id} />
                <EditSet setFlashcardSets = {setFlashcardSets} id = {id} />
            </div>
            <p>{id}</p>
        </div>
    );
}