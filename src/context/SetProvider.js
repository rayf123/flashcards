import React, { createContext, useState } from "react";

const SetContext = createContext(0);

export function SetProvider({ children }) {
    const [flashcardSet, setFlashcardSet] = useState(0);

    return (
        <SetContext.Provider value = {{ flashcardSet, setFlashcardSet }}>
            { children }
        </SetContext.Provider>
    );
}

export default SetContext;