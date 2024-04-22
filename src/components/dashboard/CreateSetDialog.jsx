import React from "react";
import DialogBoxLayout from "../layouts/DialogBoxLayout";
import InputBoxLayout from "../layouts/InputBoxLayout";
import Create from "./Create";

export default function CreateSetDialog({isOpen, setOpen, data}) {
    return (
        <DialogBoxLayout isOpen = {isOpen} setOpen = {setOpen} props = {{title: "Create a new set"}} content = {
            <>
                <InputBoxLayout title = {"Title"} placeholder = {"..."} id = {""} value = {data.title} setValue = {data.setTitle} />
                <InputBoxLayout title = {"Description"} placeholder = {"..."} id = {""} value = {data.description} setValue = {data.setDescription} />
            </>
        }   buttons = {<Create />}
            handleSubmit={data.handleSubmit}
        />

    );
}