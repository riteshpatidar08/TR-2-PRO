import React, { useEffect } from 'react';
import { fetchProduct } from '../../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
function Product() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const { product } = useSelector((state) => state.product);

  const columns = [
    {
      field: 'image',
      headerName: 'Photo',
      width: 100,
      renderCell: (params) => {
        <div>
          <img src={`http://localhost:3000/${params.row.image}`} />
        </div>;
      },
    },
    { field: 'name', headerName: 'Name', width: 100 },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
    },
    {
      field: 'category',
      headerName: 'Category',
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 250,
    },
    {
      field: 'discountPrice',
      headerName: 'Discount Price',
    },
    {
      headerName: 'Actions',
      renderCell: (params) => {
        <div>
          <button>Edit</button>
          <button>Edit</button>
        </div>;
      },
    },
  ];

  return (
    <div>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={product}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}

export default Product;
