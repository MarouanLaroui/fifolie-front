import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Action from "../models/Action";

export default function ActionCard(props: {action : Action}){
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
        <Typography></Typography>
      </Stack>
    </Paper>
  )
}