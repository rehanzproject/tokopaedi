import { Alert } from '@mui/material';
import React, {  useState } from 'react';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../../config/redux/userSlice/userSlice';

const AlertSuccess = () => {
 
  const [dismissed, setDismissed] = useState(false);
  const alert = useSelector((state)=>state.user.alert)
  const dispatch = useDispatch()
  let severity = ""
  let message = ""
  switch(alert){
    case 'keranjang':
      severity="success"
      message="Sukses Memasukkan ke keranjang!"
      break
    case 'sudah':
      severity="error"
      message="Produk sudah ada di Keranjang!"
      break
    case 'account':
      severity="success"
      message="Sukses Merubah Akun!"
      break
    case 'hapus':
      severity="success"
      message="Sukses Menghapus Barang ke keranjang!"
      break
    case 'perbaikan':
      severity="warning"
      message="Anda hanya bisa Beli 1 keranjang!"
      break
        
              
    default:
      return null  
  }
  if (dismissed) {
    dispatch(setAlert(''))
  }
  setTimeout(()=> dispatch(setAlert('')),3000)
  return (
    <Stack sx={{ width: '50%' }} spacing={2}>
     <Alert severity={severity}>{message}</Alert>
       </Stack>
  );
}

export default AlertSuccess;
