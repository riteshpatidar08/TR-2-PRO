import React, { useEffect } from 'react';
import { fetchProduct } from '../../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
function Product() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};

  const { product } = useSelector((state) => state.product);

  const columns = [
    {
      field: 'image',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => (
      <div>
        <img className='object-contain w-14' src={`http://localhost:3000/${params.value}`} />
      </div>
      ),
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
      field : 'actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <div className='flex m-2 gap-2 cursor-pointer'>
     <FiEdit2 size={26} className='text-blue-500' />
      
      <MdDeleteOutline size={26} className='text-red-500'/>
        </div>
      ),
    },
  ];

  return (
    <div className='m-10'>
<button onClick={handleOpen} className='bg-blue-500 px-6 py-2 rounded-sm my-4 text-white font-semibold'>Add Product</button>
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
         
         
        />
      </Box>
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div>hello</div>
        </Box>
      </Modal>
    </div>
  );
}

export default Product;
