import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function AppBar(){
  return (
    <Grid container direction='row' alignItems='center' justifyContent='center'>
    
        <Stack direction='column' alignItems='flex-end'>
        <Typography  variant="h5" sx={{}} color='yellow'>TM</Typography>
          <Box padding='10px' sx={{backgroundColor:"red"}} border={'solid 3px black'} borderRadius='10px'>
            <Stack 
              direction='column' 
              justifyContent='center' 
              alignItems='center'
              paddingLeft='10px'
              paddingRight='10px'
              paddingTop='10px' 
              paddingBottom='20px'
              borderRadius='10px'
              border={'solid 3px black'}
              sx={{
                backgroundColor:'orange'
              }}
              >
              
              <Typography 
                fontWeight={600} 
                color='yellow' 
                sx={{
                  typography:{xs:"h2",md:'h1'},
                  textShadow: "-3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;"
                }}
                >
                  FIFOLIE
              </Typography>
            </Stack>
          </Box>
        </Stack>
  </Grid>
  )
}
