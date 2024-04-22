import React from "react";
import DialogBoxLayout from "../../layouts/DialogBoxLayout";
import Setting from "./Setting";
import ToggleHorizontalCard from "./ToggleHorizontalCard";
import Restart from "./Restart";

//isOpen = {open} setOpen = {setOpen} setCardNum = {setCardNum} displayHorizontalCards = {displayHorizontalCards} setDisplayHorizontalCards = {setDisplayHorizontalCards}
export default function SettingsDialog2({isOpen, setOpen, setCardNum, displayHorizontalCards, setDisplayHorizontalCards}) {
    return (
        <DialogBoxLayout isOpen = {isOpen} setOpen = {setOpen} props = {{title: "Settings"}} content = {
            <>
                <Setting title = {"Display Cards"} children = {
                    <ToggleHorizontalCard displayHorizontalCards = {displayHorizontalCards} setDisplayHorizontalCards = {setDisplayHorizontalCards} />
                }/>
                <Setting title = {"Restart"} children = {
                    <Restart setCardNum = {setCardNum} />
                } />
            </>
        }/>
    );
}