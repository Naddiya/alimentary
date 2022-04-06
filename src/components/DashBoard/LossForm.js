import React from 'react';
import { Box, Card } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'id', width: 90 },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
    editable: true,
  },
  {
    field: 'weight',
    headerName: 'Weigth',
    width: 150,
    editable: true,
  },
  {
    field: 'loss',
    headerName: 'Loss',
    type: 'number',
    width: 110,
    editable: true,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
];
const rows = [
  { id: 1, date: '1/1/2021', weight: '125', loss: '0' },
  { id: 2, date: '2/1/2021', weight: '124', loss: '1' },
  { id: 3, date: '3/1/2021', weight: '123', loss: '2' },
];

const LossForm = () => {

  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{ height: 400, width: '80%', m: 'auto', p: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Card>
    </Box >
  );
};

export default LossForm;