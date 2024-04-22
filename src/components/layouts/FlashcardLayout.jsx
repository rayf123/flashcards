import React from "react";
import Card from "../flashcards/Card";
import Forward from "../flashcards/controls/Forward";
import Backward from "../flashcards/controls/Backward";
import Count from "../flashcards/controls/Count";
import Shuffle from "../flashcards/controls/Shuffle";
import Settings from "../flashcards/controls/Settings";
import HorizontalCard from "../flashcards/horizontal/HorizontalCard";
import AddCardButton from "../flashcards/AddCardButton";

export default function FlashcardLayout({card, cardNum, setCardNum, cards, length, displayHorizontalCards, setDisplayHorizontalCards}) {
    return (
        <div class = "flex justify-center">
            <div class = "flex flex-col items-center gap-5 w-96">
                <div>
                    <AddCardButton />
                </div>
                <div>
                    <Card front = {card.front} back = {card.back}/>
                </div> 
                <div class = "flex items-center">
                    <div class = "mr-auto"><Shuffle /></div>
                    <Backward setCardNum = {setCardNum} />
                    <Count number = {cardNum + 1} length = {length}/>
                    <Forward setCardNum = {setCardNum} length = {length} />
                    <div class = "ml-auto"><Settings setCardNum = {setCardNum} displayHorizontalCards = {displayHorizontalCards} setDisplayHorizontalCards = {setDisplayHorizontalCards}/></div>
                </div>
                {
                    displayHorizontalCards && 
                    <div>
                        {cards.map((card, index) => {
                            return <HorizontalCard front = {card.front} back = {card.back} key = {index} /> //temp key for now, change later
                        })}
                    </div>
                }
            </div>
        </div>  
    );
}