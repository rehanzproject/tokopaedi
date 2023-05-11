import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    user:{
        nama:'',
        jenisKelamin:'',
        alamatLengkap:'',
        pinpoint:'',
        nomorHP:'',
       }
    }

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
   addUser: (state , action ) => {{
    return {...state , email:action.payload , isLogin:true}
   }},
   addProfile: (state , action ) => {{
    return {...state , user:action.payload , isProfile:true}
   }},
   addUserProfile: (state , action ) => {{
    return {...state , photoURL:action.payload }
   }},
   logoutUser: (state , action ) => {{
    return state = initialUserState
   }},
   
   paginationControl: (state , action ) => {{
    return {...state , pagination:action.payload }
   }},
   setAlert: (state , action ) => {{
    return {...state , alert:action.payload }
   }},
   
   removeUser: (state , action ) => {{
    return {...state , email:action.payload}
   }},
  
  },
});

// Action creators are generated for each case reducer function
export const { addUser, removeUser, paginationControl, setAlert, addProfile , addUserProfile, logoutUser} =
  userSlice.actions

export default userSlice.reducer