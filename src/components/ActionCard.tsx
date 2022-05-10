import { DeleteForeverRounded } from "@mui/icons-material";
import { IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Action from "../models/Action";

export default function ActionCard(
  props: {
    action : Action,
    index:  number
    onActionDeletionFromFifo(id: number,index: number):void
  }){
    const {action, index,onActionDeletionFromFifo} = props;
  return (
    <Paper
      sx={{
        height: 80,
        width: 80,
        backgroundColor: '#1A2027',
      }}
      >
      <Stack direction='column' alignItems='center' width='100%'>
        <Typography color='white'>{props.action.name}</Typography>
        <IconButton 
          onClick={()=>onActionDeletionFromFifo(action.id, index)}
          sx={{color:'white'}}
          >
              <DeleteForeverRounded fontSize="medium"/> 
            </IconButton>
      </Stack>
    </Paper>
  )
}