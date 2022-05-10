import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import Action from "../models/Action";
import ActionRow from "./ActionRow";
import ActionRowLegend from "./ActionRowLegend";

export default function Actions(props : 
  {
    actions : Action[],
    onAddToActionList(action: Action):void
    onCreateClick():void,
    onUpdateClick(action: Action):void,
    onDeleteClick(action : Action):void,
  }){
  const {actions,onAddToActionList, onCreateClick, onUpdateClick,onDeleteClick} = props;
  return (
    <Stack direction='column' width='100%'>
      <ActionRowLegend></ActionRowLegend>
      <Box overflow='scroll' maxHeight='180px' width="100%">
        {
          actions.map((action,index)=>{
            return (
            <React.Fragment key={action.id}>
            <ActionRow action={action}  onDeleteClick={onDeleteClick} onUpdateClick={onUpdateClick} onAddToActionList={onAddToActionList}/>
            <Divider sx={{bgcolor:'gray'}}/>
            </React.Fragment>
            )
          })
        }
      </Box>
      
    </Stack>
  )
}