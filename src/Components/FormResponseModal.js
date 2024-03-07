import React from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
export default function FormResponseModal(props) {
  const { show, message, handleClose, variant = "Success" } = props;
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={show}
    >
      <CloseIcon
        sx={{
          position: "absolute",
          top: 15,
          right: 20,
          fontSize: 30,
          borderRadius: 25,
          border: "2px solid #979393",
          color: "#626161",
          cursor: "pointer",
        }}
        onClick={() => handleClose()}
      />
      <div style={{ padding: 10 }}>
        <p style={{ fontSize: 50, textAlign: "center", marginTop: 12 }}>
          {variant === "Success" ? "😊" : "😥"}
        </p>
        <p
          style={{
            fontSize: 17,
            textAlign: "center",
            color: variant === "Error" && "red",
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              borderRadius: 8,
              outline: 0,
              border: `1px solid `,
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
              textAlign: "center",
              margin: 0,
            }}
            onClick={() => handleClose()}
          >
            {variant === "Success" ? "OK Thanks" : "Close"}
          </button>
        </div>
      </div>
    </BootstrapDialog>
  );
}
