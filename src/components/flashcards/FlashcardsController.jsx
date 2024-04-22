import React, { useEffect, useRef, useState } from "react";
import FlashcardLayout from "../layouts/FlashcardLayout";
import useAuth from "../../hooks/useAuth";
import useSet from "../../hooks/useSet";
import useBackButton from "../../hooks/useBackButton";
import { useNavigate } from "react-router-dom";

export default function FlashcardsController() {
    const [cards, setCards] = useState([]); //{front: , back: }
    const [cardNum, setCardNum] = useState(0);
    const [displayHorizontalCards, setDisplayHorizontalCards] = useState(false);
    const { auth } = useAuth();
    const { flashcardSet, setFlashcardSet } = useSet();
    let back = useBackButton();
    const componentMounted = useRef(false);
    const navigate = useNavigate();

    useEffect(() => {
        //the user went from /study to /login (no flashcard set)
        if (flashcardSet == 0) {
            navigate("/dashboard/"); 
            console.log("go to /dashboard/")
            return;
        }

        const abortController = new AbortController();
        const getFlashcards = async () => {
            const headers = new Headers({
                "Content-Type":"application/json",
                "Authorization":`Bearer ${auth?.accessToken}`
            });
            try {
                let response = await fetch("/study/", {
                    method: "POST",
                    credentials: "include",
                    headers: headers,
                    body: JSON.stringify({username: auth?.user, id: flashcardSet}),
                    signal: abortController.signal
                });

                response = await response.json();
                return response;
            } catch (err) {
                console.error(err)
            }
        }

        const response = getFlashcards();
        response.then((data) => setCards(data));
        return () => abortController.abort();
    }, []);

    /*modified useEffect to only runs when "back" changes, not on initial render
      initial render triggers "componentMounted.current = true"
      so that when "back" changes, it triggers "setFlashcardSet(0)"*/
    useEffect(() => {
        componentMounted ? setFlashcardSet(0) : componentMounted.current = true;
    }, [back]); 

    return (
        <>
            {
                cards?.length > 0 &&
                <FlashcardLayout 
                    card = {cards[cardNum]} cardNum = {cardNum} setCardNum = {setCardNum} cards = {cards}
                    length = {cards.length} displayHorizontalCards = {displayHorizontalCards} setDisplayHorizontalCards = {setDisplayHorizontalCards}
                />
            }
        </>
    );
}