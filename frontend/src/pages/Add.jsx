import { Button,Checkbox,FormControlLabel,FormGroup,TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from '../schema/formSchema';
import axios from 'axios';
// import axios from 'axios';

const Add = () => {
  const [data, setData] = useState({ name: "", price: 0})

  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm({
    resolver: yupResolver(loginFormSchema),
});
function handleChange(e) {
  e.preventDefault()
  setData({
      ...data, [e.target.name]: e.target.value
  });
}
const addData = (e) => {
    if(!data.name || !data.price) return;
  e.preventDefault();
  axios.post("http://localhost:8080/users",data);
  // getData();
 console.log("salam")
};
console.log(data);

  return (
    <>
      <form style={{ display: 'flex', flexDirection: "column", alignItems: "center", marginTop: 50 }}>
      <TextField id="outlined-basic" label="Name" variant="outlined" style={{ marginBottom: 10 }} {...register("name")}  name="name" onChange={(e) => handleChange(e)} />
            {errors.name ? (
                <span style={{ color: "red" }}>{errors.name.message}</span>
            ) : (
                <></>
            )}
            <TextField id="outlined-basic" label="price" variant="outlined" style={{ marginBottom: 10 }} {...register("price")} name="price" onChange={(e) => handleChange(e)} />
            {errors.price ? (
                <span style={{ color: "red" }}>{errors.price.message}</span>
            ) : (
                <></>
            )} 
           {/* <TextField id="outlined-basic" label="units in stock" variant="outlined" style={{ marginBottom: 10 }} {...register("unitsInStock")} name="unitsInStock" onChange={(e) => handleChange(e)} />
            {errors.unitsInStock ? (
                <span style={{ color: "red" }}>{errors.unitsInStock.message}</span>
            ) : (
                <></>
            )}
            <TextField id="outlined-basic" label="Quantity per Unit" variant="outlined" style={{ marginBottom: 10 }} {...register("quantityPerUnit")} name="quantityPerUnit" onChange={(e) => handleChange(e)} />
            {errors.quantityPerUnit ? (
                <span style={{ color: "red" }}>{errors.quantityPerUnit.message}</span>
            ) : (
                <></>
            )} */}
            <FormGroup>
                <FormControlLabel control={<Checkbox onClick={(e) => handleChange(e)} />} label="is Discounted" name="discounted" />
            </FormGroup>
            <Button variant='contained' onClick={addData} style={{ marginBottom: 40 }}>ADD PRODUCT TO API</Button>
        
        </form>


    </>
  )
}

export default Add
