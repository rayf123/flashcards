import React from "react";
import DialogBoxLayout from "../layouts/DialogBoxLayout";
import InputBoxLayout from "../layouts/InputBoxLayout";
import Edit from "./Edit";

export default function EditSetDialog({isOpen, setOpen, data}) {
    return (
        <DialogBoxLayout isOpen = {isOpen} setOpen = {setOpen} props = {{title: "Edit set"}} content = {
            <>
                <InputBoxLayout title = {"Title"} placeholder = {"..."} id = {""} value = {data.title} setValue = {data.setTitle}/>
                <InputBoxLayout title = {"Description"} placeholder = {"..."} id = {""} value = {data.description} setValue = {data.setDescription}/>
            </>
        }   buttons = {<Edit />} 
            handleSubmit={data.handleSubmit}
        />
    );
}