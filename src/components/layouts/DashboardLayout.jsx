import React from "react";
import Set from "../dashboard/Set";
import CreateSet from "../dashboard/CreateSet";
import Logout from "../dashboard/Logout";

export default function DashboardLayout({flashcardSets, setFlashcardSets}) {
    
    return (
        <div class = "h-full w-full">
            <h1 class = "font text-4xl font-bold underline text-center my-5">My Flashcard Sets</h1>
            <div class = "text-center">
                <CreateSet setFlashcardSets = {setFlashcardSets} />
                <Logout />
            </div>
            <div class = "w-10/12 mx-auto my-5">
            {   
                flashcardSets?.length > 0 &&
                flashcardSets.map((set) => {
                    return <Set title = {set.title} description = {set.description} key = {set.id} id = {set.id} setFlashcardSets = {setFlashcardSets} /> 
                })
            }
            </div>
        </div>
    );
}