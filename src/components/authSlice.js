import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name:'',
  contact:'',
  image:'',
  email: '',
  password: '',
  cpassword:''
  
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setContact(state, action) {
      state.contact = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setCpassword(state, action) {
      state.cpassword = action.payload;
    },
    
    resetForm(state) {
      state.name='';
      state.contact='';
      state.email = '';
      state.password = '';
      state.cpassword='';

      // state.submitted = false;
    }
  }
});

export const { setName,setContact,setImage,setEmail, setPassword,setCpassword, resetForm } = formSlice.actions;
export default formSlice.reducer;
