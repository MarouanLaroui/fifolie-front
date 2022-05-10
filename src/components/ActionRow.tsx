import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import Action from "../models/Action";
import { DeleteForeverRounded } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import axios, { AxiosError } from "axios";
import useMessageContext from "../hooks/useMessageContext";
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function ActionRow(
  props : {
    action : Action,
    onAddToActionList(action: Action):void,
    onUpdateClick(action : Action):void,
    onDeleteClick(action : Action):void,
  }){

  const {action,onUpdateClick, onDeleteClick, onAddToActionList} = props;
  const {setErrorMsg, setSuccessMsg} = useMessageContext()
  const [dialogMsg, setDialogMsg] = useState("")
  

  const onDeletionClick = ()=>{
    setDialogMsg('Voulez-vous vraiment supprimer cette action ?')
  }

  const onDeletion = ()=>{
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/action-list/action/${action.id}`)
      .then((response)=> {
        setSuccessMsg("Tache supprimee avec succes !")
        onDeleteClick(action)
      })
      .catch((error: AxiosError)=> setErrorMsg(error.message))
  }

  return (
    <>
      {
        <Dialog
          open={!!dialogMsg}
          onClose={() => setDialogMsg('')}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{dialogMsg}</DialogTitle>
            <DialogContent>
                <DialogContentText>Cette action est irreversible.</DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center', paddingBottom: '15px' }}>
              
              <Button variant="contained" onClick={onDeletion} autoFocus>
                  Supprimer
                </Button>
              <Button variant="outlined" onClick={() => setDialogMsg('')}>
                  Annuler
              </Button>
            </DialogActions>
          </Dialog>
      }
    <Box 
      sx={{
        '&:active': { backgroundColor: 'rgba(100, 100, 100, 0.12)' },
        '&:hover': {
        transform: 'scale(1.009)',
        boxShadow: '0 0 10px 1px rgba(100, 100, 100, 0.3)',
        },
      }}
    >
        <Grid container alignItems='center' padding='5px'>
          <Grid item xs>
            <Typography color='white'>{action.name}</Typography>
          </Grid>

          <Grid item xs>
            <Typography color='white'>{action.maxValue}</Typography>
          </Grid>

          <Grid item xs>
            <Typography color='white'>{action.currentValue}</Typography>
          </Grid>

          <Grid item xs="auto">
          <Tooltip title="Ajouter à la fifo">
            <IconButton 
                aria-label="add to fifo" 
                onClick={()=>onAddToActionList(action)}
                sx={{color:'white'}}
                >
              <AddBoxIcon /> 
            </IconButton>
          </Tooltip>
         
            <Tooltip title="Modifier">
              <IconButton aria-label="update" onClick={(event) => {
                onUpdateClick(action)}
                } sx={{color:'white'}}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </Grid>

          <Grid item xs="auto">
            <Tooltip title="Supprimer">
              <IconButton 
                aria-label="delete" 
                onClick={(event)=>{

                  onDeletionClick()}
                } sx={{color:'white'}}>
                <DeleteForeverRounded />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}