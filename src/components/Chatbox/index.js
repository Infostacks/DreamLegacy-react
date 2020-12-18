import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid';

const useStyles1 = makeStyles({
  root: {
    minWidth: 250,
    minHeight : 550,
    color : "##ffffff",
    background : "#999999",
  },
  pos: {
    marginBottom: 12,
  },
});

const useStyles2 = makeStyles({
  root: {
    minWidth: 250,
    minHeight : 500,
    color : "black",
    background : "white",
  }
});


const rows = [
  {id : '1' , lastName: 'Islam', firstName: 'Ghufran', number: "Test1"},
  {id : '2' , lastName: 'Saleem', firstName: 'Utaiba', number: "Test2"},
];

const columns = [
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'number', headerName: 'Lotto Number', width: 130 }
];

export default function OutlinedCard() {
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  return (
    <Card className={classes1.root} variant="outlined">
      <CardContent>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid className={classes2.root} rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
      </CardContent>
    </Card>
  );
}
