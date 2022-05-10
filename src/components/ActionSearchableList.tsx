import { Box, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Action from "../models/Action";
import Actions from "./Actions";
import SearchBar from "./SearchBar";
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function ActionSearchableList(props : 
  {
    actions : Action[],
    onAddToActionList(action: Action):void
    onCreateClick():void,
    onUpdateClick(action : Action):void,
    onDeleteClick(action : Action):void,
  }){

  const {actions, onAddToActionList,onCreateClick, onUpdateClick, onDeleteClick} = props;
  const [filteredActionList,setFilteredActionList] = useState<Action[]>(actions)
  const [searchedItemName,setSearchedItemName] = useState("");

  /*On search filter the list*/
  useEffect(()=>{
    setFilteredActionList(
      actions.filter((action)=>{
        if(action.name.toLocaleLowerCase().includes(searchedItemName.toLocaleLowerCase())){
          return action
        }
      })
    )
  },[actions, searchedItemName])


  return (
    <Stack direction='column' width='100%' justifyContent='center' alignItems='center'>
      <Stack direction='row' justifyContent='center' alignItems='center' paddingBottom='15px' spacing='7px'>
      <PaidSharpIcon sx={{marginLeft:"7px", color:"yellow",fontSize:{xs:30,md:40}}}/>
      <Typography sx={{ typography: { xs: 'h4', md: 'h3' } }} color='white'>
        Actions disponibles
        </Typography>
      </Stack>
      
      <Grid container marginBottom='5px'>
        <Grid item xs>
          <SearchBar setSearchedItemName={setSearchedItemName}/>   
        </Grid>
         <Grid item>
          <Tooltip title={"Create Action"}>
            <IconButton 
              color="warning" 
              aria-label="upload picture" 
              onClick={onCreateClick}
              >
              <AddBoxIcon fontSize="large"/> 
            </IconButton>
          </Tooltip>
         
         </Grid>
        
      </Grid>

      <Actions 
        actions={filteredActionList} 
        onAddToActionList={onAddToActionList} 
        onUpdateClick={onUpdateClick} 
        onDeleteClick={onDeleteClick}
      />

{
        actions.length==0 &&
        <Typography color='white' >Pas d'actions disponibles, creez en une a gauche !</Typography>
      }

      {
        actions.length>0 && filteredActionList.length==0 &&
        <Typography color='white'>Pas d'actions correspondant à vos critères</Typography>
      }
 
    </Stack>
  )
}