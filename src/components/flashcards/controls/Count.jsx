import React from "react";

export default function Count({number, length}) {
    return (
        <p class = "font">
            {number} / {length}
        </p>
    );
}