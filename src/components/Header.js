import { Typography } from '@mui/material'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector,useDispatch } from 'react-redux'
import { collapseStatus } from '../features/form/formSlice';



const Header = () => {
  const { alert } = useSelector(state => state.form)
  const dispatch = useDispatch()

  return (
    <div>
      <Collapse in={alert.open}>
        <Alert
          severity={alert.severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => dispatch(collapseStatus())}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {alert.text}
        </Alert>
      </Collapse>
      <Typography variant="h3" sx={{ textAlign: 'center', color: 'orangered' }}>
        REDUX BLOG
      </Typography>
    </div>
  )
}

export default Header