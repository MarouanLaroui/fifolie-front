import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Grid, Stack, Typography } from '@mui/material';
import Time from '../models/Time';

export default function Clock(props :{time : Time}){
  return (
    <Grid container spacing='20px' alignItems='center'>
      <Grid item>
        <Stack direction='column' justifyContent='center' >
          <Typography variant='body1'>Temps restant</Typography>
          <Typography variant='h5'>{props.time.hours}:{props.time.minutes}:{props.time.seconds}</Typography>
          </Stack>
      </Grid>
      <Grid item xs="auto">
      <AccessTimeIcon fontSize="large"></AccessTimeIcon>
      </Grid>
      
    </Grid>
  )
}