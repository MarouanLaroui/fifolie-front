import React from "react";
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { Button, Stack, Typography } from "@mui/material";
import InputField from "./TextField";
import axios, { AxiosError } from "axios";
import Action from "../models/Action";
import useMessageContext from "../hooks/useMessageContext";
import ElectricBoltSharpIcon from '@mui/icons-material/ElectricBoltSharp';


const actionValidationSchema = yup.object({
  name: yup.string().required().length(1),
  maxValue: yup.number().min(1).max(100),
});

export default function ActionForm(props:{
  action: Action|null,
  onSubmit(action: Action):void
}){
  const {setErrorMsg, setSuccessMsg} = useMessageContext()
  const {action, onSubmit} = props;

  return (
    <Formik 
    enableReinitialize
    initialValues={
      action
      ? {
        name : action.name, 
        maxValue: action.maxValue
      }
      : {
        name : '',
        maxValue : 10
      }
    }
    validationSchema={actionValidationSchema}

    onSubmit={(data)=>{
      
      const axiosAction = action?
      axios.patch(`${process.env.REACT_APP_BACKEND_URL}/action/${action.id}`,
      {
        id : action.id, 
        name: data.name, 
        maxValue: data.maxValue
      })
      :axios.post(`${process.env.REACT_APP_BACKEND_URL}/action`,
      {
        name: data.name, 
        maxValue: data.maxValue
      })

      axiosAction
      .then((response)=>{
        onSubmit(
          action?
          {id: action.id,...data}
          :response.data
          )
        setSuccessMsg(action?
          "Action modifiee avec succes !"
          :"Action creee avec succes !")
      })

      .catch(
        (error : AxiosError)=>{
          setErrorMsg(error.message);
        }
      )
    }}
  >
    {
      (formik)=>{
        return (
          <Form>
            <Stack 
              direction='column' 
              justifyContent='center' 
              alignItems='center' 
              spacing='15px' 
              width='100%' 
              >

              <Stack direction='row' justifyContent='center' alignItems='center' paddingBottom='15px' spacing='7px'>
                <ElectricBoltSharpIcon sx={{marginLeft:"7px", color:"yellow",fontSize:{xs:30,md:40}}}/>
                <Typography sx={{ typography: { xs: 'h4', md: 'h3' } }} color='white'>
                  {action? 'Modifier action':'Creer une action'}
                </Typography>
              </Stack>
              
              <InputField label='name' name='name' placeholder='name' type='text'/>
              <InputField label='maxValue' name='maxValue' placeholder='maxValue' type='number'/>
              <Button variant="contained" fullWidth type="submit">{action?"Update":"Create"}</Button>
            </Stack>
          </Form>
        )
      }
    }
  </Formik>
  )
}