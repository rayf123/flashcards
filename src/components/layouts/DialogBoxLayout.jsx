import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function DialogBoxLayout({isOpen, setOpen, props, content, buttons, handleSubmit}) {
    return (
        <Dialog open={isOpen} onClose={() => setOpen(false)} fullWidth maxWidth = 'sm' PaperProps={{ sx: { borderRadius: "16px" } }}>
          <DialogContent>
              <h2 class = "font font-bold text-2xl mb-6">{props.title}</h2>
              {content}
          </DialogContent>
          <form onSubmit={handleSubmit}>
            <DialogActions>
              {buttons}
              <button type = "button" onClick={() => setOpen(false)} class="text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 font-medium text-sm px-5 py-2.5">
                  <span class = "font font-bold">Exit</span>
              </button>
            </DialogActions>
          </form>
      </Dialog>
    );
}