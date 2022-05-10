import {Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { DeleteForeverRounded } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

export default function ActionRowLegend(){

  return (

        <Grid container alignItems='center' padding='5px'>
          <Grid item xs>
            <Typography color='white'>Action name</Typography>
          </Grid>

          <Grid item xs>
            <Typography color='white'>Max value</Typography>
          </Grid>

          <Grid item xs>
            <Typography color='white'>Curr value</Typography>
          </Grid>

          <Grid item xs="auto">
            <Tooltip title="Modifier">
              <IconButton aria-label="delete" sx={{color:'black'}}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </Grid>

          <Grid item xs="auto">
            <Tooltip title="Supprimer">
              <IconButton aria-label="modify" sx={{color:'black'}}>
                <DeleteForeverRounded />
        </IconButton>
      </Tooltip>
    </Grid>
  </Grid>
  )
}