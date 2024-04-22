import React from "react";
import Delete from "./Delete";
import EditCard from "./EditCard";

export default function HorizontalCard({front, back}) {
    return (
        <div class="block text-center text-pretty max-w-xl p-3 my-3 bg-white border border-gray-200 rounded-lg shadow">
            <div class = "grid grid-cols-3 divide-x divide-gray-500">
                <div>
                    <p class="text-lg break-words tracking-tight text-gray-900 dark:text-white font">
                        {front} 
                    </p> 
                </div>
                <div>
                    <p class="text-lg break-words tracking-tight text-gray-900 dark:text-white font">
                        {back} 
                    </p> 
                </div>
                <div>
                    <Delete />
                    <EditCard />
                </div>
            </div>
        </div>
    );
}