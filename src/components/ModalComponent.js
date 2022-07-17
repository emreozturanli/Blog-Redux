import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useSelector,useDispatch} from 'react-redux';
import { closeModal } from '../features/form/formSlice';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalComponent() {
  const { isExist } = useSelector(state => state.form)
  
  const dispatch = useDispatch()
  const handleClose = ()=>{
    dispatch(closeModal())
  }

  return (
    <Dialog
    open={isExist}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>Title already exists!!!</DialogTitle>
    <DialogActions>
      <Button onClick={handleClose}>Close</Button>
    </DialogActions>
  </Dialog>
  );
}