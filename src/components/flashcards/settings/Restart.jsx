import React from "react";

import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function Restart({setCardNum}) {
    return (
        <button type = "button" class = "ml-auto mr-0" onClick = {() => setCardNum(0)}>
            <RestartAltIcon />
        </button>
    );
}
