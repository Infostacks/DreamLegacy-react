import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Delete } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';

export default function FormDialog() {
    const [openAdd, setOpenAdd] = React.useState(false);
    const [openDel, setOpenDel] = React.useState(false);  
    const handleClickOpenAdd = () => {
      setOpenAdd(true);
    };
  
    const handleCloseAdd = () => {
      setOpenAdd(false);
    };

    const handleClickOpenDel = () => {
        setOpenDel(true);
      };
    
      const handleCloseDel = () => {
        setOpenDel(false);
      };

    return(
        <div>
      <IconButton aria-label="delete" onClick={handleClickOpenDel}>
        <DeleteIcon />
      </IconButton>
      <Dialog open={openDel} onClose={handleCloseDel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Delete Pool</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Remove Existing Pool from the daily lucky draw
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Pool name"
            type="string"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseDel} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <IconButton aria-label="add" onClick={handleClickOpenAdd}>
        <AddCircleOutlineIcon/>
      </IconButton>
      <Dialog open={openAdd} onClose={handleCloseAdd} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Pool</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add New Pool to the daily draw, give it a name
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Pool name"
            type="string"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
}