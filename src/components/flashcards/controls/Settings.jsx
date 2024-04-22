import React, {useState} from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsDialog from "../settings/SettingsDialog";
import SettingsDialog2 from "../settings/SettingsDialog2";

export default function Settings({setCardNum, displayHorizontalCards, setDisplayHorizontalCards}) {
    const [open, setOpen] = useState(false); //false = closed, true = open

    return (
        <>
            <button onClick = {() => setOpen(!open)} type="button" class="text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 font-medium text-sm px-5 py-2.5">
                <SettingsIcon />
            </button>
            <SettingsDialog2 isOpen = {open} setOpen = {setOpen} setCardNum = {setCardNum} displayHorizontalCards = {displayHorizontalCards} setDisplayHorizontalCards = {setDisplayHorizontalCards} />
            {/* <SettingsDialog isOpen = {open} setOpen = {setOpen} setCardNum = {setCardNum} displayHorizontalCards = {displayHorizontalCards} setDisplayHorizontalCards = {setDisplayHorizontalCards}/> */}
        </>
    )
}