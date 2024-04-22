import React, {useState, useEffect} from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import useAuth from "../../hooks/useAuth";

export default function DashboardController() {
    const [flashcardSets, setFlashcardSets] = useState([]);
    const { auth } = useAuth();
    //consider useMemo

    useEffect(() => {
        //ensure hanging requests are closed
        const abortController = new AbortController();
        const getFlashcardSets = async () => {
            const headers = new Headers({
                "Content-Type":"application/json",
                "Authorization":`Bearer ${auth?.accessToken}`
            });
            try {
                let response = await fetch("/dashboard/", {
                    method: "POST",
                    credentials: "include",
                    headers: headers,
                    body: JSON.stringify({username: auth?.user}),
                    signal: abortController.signal
                });

                response = await response.json();
                return response;
            } catch (err) {
                console.error(err);
            }
        }

        const userFlashcardSets = getFlashcardSets();
        userFlashcardSets.then(data => setFlashcardSets(data))
        //cleanup function to close hanging requests
        return () => abortController.abort(); 
    }, []);

    return (
        <DashboardLayout flashcardSets = {flashcardSets} setFlashcardSets = {setFlashcardSets} />
    );
}