import React, { useState } from 'react';
import { getpools } from 'Services/Pools';
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
  const [price, setprice] = useState('');
  const [name, setname] = useState('');
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

  const getdata = async () => {
    const data = {
      name: name,
      price: price // This is the body part
    }

    const poolResult = await getpools(data);
    console.log('hello login result', poolResult)
    return poolResult;
  };

  const submit = async () => {

    const result = await getdata()
    console.log('hello', result)

  }

  return (
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
        <AddCircleOutlineIcon />
      </IconButton>
      <Dialog open={openAdd} onClose={handleCloseAdd} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a Pool</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add New Pool to the Daily Draw, Give it a Name
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Pool name"
            type="string"
            value={name}
            onChange={(event) => setname(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Winning Amount"
            type="string"
            value={price}
            onChange={(event) => setprice(event.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd} color="primary">
            Cancel
          </Button>
          <Button onClick={() => submit()} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}