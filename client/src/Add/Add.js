import React from 'react'
import { Formik,Form,Field } from 'formik';
import './Add.scss';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import {Helmet} from "react-helmet";
const SignInSchema = Yup.object().shape({
  image: Yup.string().required("Image link is required"),
  name: Yup.string().required("Flower name is required"),
  price: Yup.number().required("Flower price is required"),

});

export default function Add() {
  return (
    
    <div className='add'>
      <Helmet>
      <title>Add Page</title>
    </Helmet>
      <div>

     <Formik
     initialValues={{
       image:'',
       name:'',
       price:0,
     }}
     validationSchema={SignInSchema}
     validateOnBlur={false}
     validateOnChange={false}
     onSubmit={ async(values)=>{
       await axios.post('http://localhost:5050/flowers',values)
       .then(res=>console.log(res.data))
       console.log(values);
     }}
     
     >

       {({errors,touched})=>(
         <Form>
       <Field as={TextField} id="outlined-basic" label="Flower image " name='image' variant="outlined" /> <br/>
       {errors.image && touched.image && (
         <div style={{ color:'red', fontSize:'16px'}}>{errors.image}</div>
       )}
            
       <Field as={TextField} id="outlined-basic" label="Flower Name" name='name' variant="outlined" /> <br/>
       {errors.name && touched.name && (
         <div style={{ color:'red', fontSize:'16px'}}>{errors.name}</div>
       )}
       <Field as={TextField} id="outlined-basic" label="Flower price" variant="outlined" name='price' /> <br/>
       {errors.price && touched.price && (
         <div style={{ color:'red', fontSize:'16px'}}>{errors.price}</div>
       )}
         
           <button className='button-71 ' type='submit'>Add</button>


         </Form>
       )}

     </Formik>
      </div>
    </div>
  )
}
