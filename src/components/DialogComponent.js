import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Typography} from "@mui/material";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { dialogClose } from '../features/form/formSlice';


 const DialogComponent = () =>{
    const {dialog} = useSelector(state => state.form)
    const dispatch = useDispatch()

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (dialog.open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [dialog.open]);

  return (
    <Dialog
        open={dialog.open}
        onClose={()=>dispatch(dialogClose())}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle sx={{minWidth:'300px'}} id="scroll-dialog-title"> 
        <Typography variant="h4" gutterBottom component="h4"> {dialog.title}</Typography>
        </DialogTitle>
        <DialogTitle sx={{minWidth:'300px'}} id="scroll-dialog-title">
       <i>{dialog.author}</i></DialogTitle>
        <DialogContent dividers= {true} sx={{minWidth:'300px'}}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {dialog.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{minWidth:'300px'}}>
          <Button onClick={()=>dispatch(dialogClose())}>Close</Button>
        </DialogActions>
      </Dialog>
  )

}

export default DialogComponent;