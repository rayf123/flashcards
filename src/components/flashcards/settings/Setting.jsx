import React from "react";

export default function Setting({title, actions, children}) {
    return (
        <div class = "flex my-3">
            <p class = "font text-xl">{title}</p>
            {children}
        </div>
    );
}