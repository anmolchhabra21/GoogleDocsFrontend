import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LockIcon from "@mui/icons-material/HttpsOutlined";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(window.location.href)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Button
        style={{
          backgroundColor: "#c2e7ff",
          color: "black",
          borderRadius: "15px",
          padding: "8px 12px",
        }}
        onClick={handleOpen}
      >
        <LockIcon />
        Share
      </Button>
      <Modal
        sx={{borderRadius:"10px"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Copy this url for collaborating!
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {window.location.href}
          </Typography> */}
          <input style={{width:"300px", margin:"1rem 0", borderRadius:"3px"}} type="text" value={window.location.href} readOnly />
          <button style={{borderRadius:"5px"}} onClick={handleCopyClick}>
            <span >{isCopied ? "Copied!" : "Copy"}</span>
          </button>
        </Box>
      </Modal>
    </div>
  );
}
