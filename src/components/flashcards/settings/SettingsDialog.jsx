import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import ToggleHorizontalCard from "./ToggleHorizontalCard.jsx";
import Restart from "./Restart.jsx";

export default function SettingsDialog({isOpen, setOpen, setCardNum, displayHorizontalCards, setDisplayHorizontalCards}) {
    return (
        <Dialog open={isOpen} onClose={() => setOpen(false)} fullWidth maxWidth = 'sm' PaperProps={{ sx: { borderRadius: "16px" } }}>
          <DialogContent>
              <h2 class = "font font-bold text-2xl mb-6">Settings</h2>
              <div class = "flex my-3">
                <p class = "font text-xl">Display Cards</p>
                <ToggleHorizontalCard displayHorizontalCards = {displayHorizontalCards} setDisplayHorizontalCards = {setDisplayHorizontalCards} />
              </div>
              <div class = "flex my-3">
                <p class = "font text-xl">Restart</p>
                <Restart setCardNum = {setCardNum} />
              </div>    
          </DialogContent>
          <DialogActions>
            <button type = "button" onClick={() => setOpen(false)} class="text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 font-medium text-sm px-5 py-2.5">
                <span class = "font font-bold">Exit</span>
            </button>
          </DialogActions>
      </Dialog>
    );
}