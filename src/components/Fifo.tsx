import { Box, Grid, Stack, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from "react";
import ActionList from "../models/ActionList";
import ActionCard from "./ActionCard";
import './Fifo.css'
export default function Fifo(props:{actionList : ActionList}){
  const {actionList} = props;
  return (
    <Grid 
      container 
      spacing={1} 
      alignItems='center' 
      justifyContent='center' 
      borderTop='solid 5px'
      borderBottom='solid 5px'
      borderRadius='10px'
      minHeight='138px'
      sx={{backgroundColor:'orange', borderColor:'dark-orange'}}
  >
    <Grid item xs="auto" marginLeft='10px' marginRight='10px' container alignItems='flex-start'>
      <Stack direction='column' alignItems='center' justifyContent='center'  >
        <ArrowBackIcon></ArrowBackIcon>
        <Typography>out</Typography>
      </Stack>
    </Grid>

    <Grid item xs={8} sm={9} md={10} lg={11}  container alignItems='center' justifyContent='center' >
      <Box overflow='scroll' > 
      <Stack direction='row' >
      {
        (actionList.actions.length===0) &&
        <Stack direction='column' alignItems='center'>
          <Typography variant="h6" >Pas d'actions en cours..</Typography>
          <Typography>Ajoutez en parmis les actions qui sont disponibles !</Typography>
        </Stack>
        
      }
      {
        actionList.actions.map((action,index)=>{
        return (
          <Box padding='8px'  key={`${action.id}i${index}`}>
            <ActionCard action={action}></ActionCard>
          </Box>
          )
        })
      }
      </Stack>
      </Box>
      
    </Grid>

      <Grid item xs="auto" marginLeft='10px' marginRight='10px'>
        <Stack direction='column' alignItems='center' justifyContent='center'>
          <ArrowBackIcon></ArrowBackIcon>
          <Typography>in</Typography>
        </Stack>
      </Grid>
  
    </Grid>
  )
}