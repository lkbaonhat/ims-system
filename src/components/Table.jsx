// ReusableDataGrid.jsx
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ columns, rows, pageSize, getRowId,...props }) => {
    return (
        <div style={{ height: '70vh', width: '100%' }}>
            <DataGrid
                sx={{ '& .MuiDataGrid-cell:focus, .MuiDataGrid-cell:focus-within': { outline: 'none' } }}
                columns={columns}
                rows={rows} 
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: pageSize },
                    },
                }}
                getRowId={getRowId}
                {...props}
            />
        </div>
    );
};

export default Table;