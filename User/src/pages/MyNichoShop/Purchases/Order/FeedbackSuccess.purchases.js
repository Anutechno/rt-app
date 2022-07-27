import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { green } from '@mui/material/colors';


export default function FeedbackSuccess({message}) {
    const [open, setOpen] = React.useState(true);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{p: 2}}>
                <Typography sx={{mt: 2, mb: 2, p:2}}> <CheckCircleOutlineIcon style={{ color: green[500] }} /> {message}</Typography>
                <Button onClick={handleClose} sx={{position: "absolute", top: "5px", right: "5px"}}>X</Button>
          </DialogTitle>
        </Dialog>
      </div>
    );
  }