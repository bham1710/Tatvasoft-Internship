import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Avatar, Popover } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Formik } from 'formik';
import * as Yup from 'yup';

export const Apple = () => {
  const Navigate = useNavigate();
  // const [name, setName] = useState('Ghanshyam Oza');
  // const [email, setEmail] = useState('Gmo@test.com');
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // useEffect(() => {
    // console.log("The new value: ", name);

    // return () => {
    //   console.log("The old value: ", name)
    // }
  // }, [name]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
    
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const onHomePageClickListner = () => {
    Navigate('/');
  }

  const onFormSubmit = (values) => {
    console.log("name and email: ", values);
    Navigate("/");
  };

  const initialValues = {
    name: "",
    email: ""
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Minimum 3 Character are required").required("Please Enter Your Name"),
    email: Yup.string().email("Please enter a Valid Email Address").required("Please Enter Your Email")
  });

  return(
    <div style={{padding: 5}}>
      {/* <div style={{margin: "20px", fontSize: "26px"}}>Apple Page 🍎</div> */}
      <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", columnGap: 5}} >
        <div onClick={handleClick} style={{display: "flex", justifyContent: "flex-end", alignItems: "center", columnGap: 5, cursor: "pointer"}}>
            <Avatar sx={{ bgcolor: "blue" }}>GO</Avatar>
        </div>
      </div>

      <div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onFormSubmit}>
          {({value, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
            <form onSubmit={handleSubmit} style={{padding: 5, display: "flex", flexDirection: "column", rowGap: 10}}>
              <TextField type="text" variant="outlined" label="Name" name='name' placeholder='Name' onChange={handleChange} onBlur={handleBlur}/>
              {touched.name && errors.name && <span style={{color: "red", padding: 5, fontSize: 16, fontWeight: 500}}>{errors.name}</span>}
              <TextField type="email" variant="outlined" label="Email" name='email' placeholder='Email' onChange={handleChange} onBlur={handleBlur}/>
              {touched.email && errors.email && <span style={{color: "red", padding: 5, fontSize: 16, fontWeight: 500}}>{errors.email}</span>}
              <Button variant="contained" type="submit">Submit</Button>
            </form>
          )}
        </Formik>
      </div>
            
      <Popover 
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div style={{padding: 5}}>
          <div style={{margin: 8, fontWeight: 500}}>Ghanshyam Oza</div>
            <LogoutIcon style={{cursor: "pointer", marginLeft: 8, marginBottom: 3}} onClick={onHomePageClickListner}/>
          </div>
          {/* <Button style={{padding: 10, cursor: "pointer"}} variant="contained" onClick={onHomePageClickListner}>Logout <LogoutIcon/></Button> */}
      </Popover>

    </div>
  )
}