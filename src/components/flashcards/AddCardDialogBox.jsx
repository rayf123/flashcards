import React from "react";
import DialogBoxLayout from "../layouts/DialogBoxLayout";
import InputBoxLayout from "../layouts/InputBoxLayout";
import Add from "./Add";

export default function AddCardDialogBox({isOpen, setOpen}) {
    return (
        <DialogBoxLayout isOpen = {isOpen} setOpen = {setOpen}
            props = {{title: "Add a Card"}} content = {
                <>
                    <InputBoxLayout title = {"Front"} placeholder = {"..."} id = {""}/>
                    <InputBoxLayout title = {"Back"} placeholder = {"..."} id = {""}/>
                </>
            } buttons = {<Add />}
        />
    );
} //change the id later