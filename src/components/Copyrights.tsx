import { Grid, Typography } from "@mui/material"
import React from "react"
export default function Copyrights(){
  return (
    <Grid container justifyContent='center' padding="10px">
      <Typography 
        color='white' 
        sx={{typography:{xs:"h6",md:'0'}}}
      >
        @2022 COPYRIGHT MAROUAN LAROUI ALL RIGHTS RESERVED
      </Typography>
    </Grid>
  )
}