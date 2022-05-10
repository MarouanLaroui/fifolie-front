import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import AppBar from './components/AppBar';
import Clock from './components/Clock';
//import {getDateIn24h} from './utils/TimeUtils';
//import Time from './models/Time';
import { Alert,Grid, Snackbar, Stack} from '@mui/material';
import Fifo from './components/Fifo';
import ActionForm from './components/ActionForm';
import Action from './models/Action';
import axios, { AxiosError } from 'axios';
import MessageContext from './context/message-context';
import ActionSearchableList from './components/ActionSearchableList';
import ActionList from './models/ActionList';
import Copyrights from './components/Copyrights';
import { Box } from '@mui/system';


function App() {

  const [actions, setActions] = useState<Action[]>([])
  const [selectedAction, setSelectedAction] = useState<Action|null>(null)
  const [actionList,setActionList] = useState<ActionList|null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const getActionList=  ()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/action-list/`)
    .then((response)=>{
      setActionList(response.data)
    })
    .catch((error : AxiosError)=> setErrorMsg(error.message))
  }
  const getActions = () =>{
    axios.get<Action[]>(`${process.env.REACT_APP_BACKEND_URL}/action`)
    .then((response)=>{
      setActions(response.data)
    })
    .catch((error : AxiosError)=> setErrorMsg(error.message))
  }

  /*Fetch fifo*/
  useEffect(()=>{
  getActionList()
  },[])

  /*Fetch all actions*/
  useEffect(()=>{

    getActions()

    const interval=setInterval(()=>{
      getActions()
      getActionList()
     },15000)

     return()=>clearInterval(interval)
  },[])

  const value = useMemo(
    () => ({
      errorMsg,
      successMsg,
      setErrorMsg,
      setSuccessMsg,
    }),
    [errorMsg, successMsg]
  );

  /*On actions*/
  const onActionCreation = (newAction : Action)=>{
    setActions([...actions,newAction]);
  }

  const onActionUpdate = (updatedAction : Action)=>{
    setActions(
      actions.map((action)=>{
        if(action.id === updatedAction.id){
          return updatedAction;
        }
        return action;
      })
    );
    getActionList()
  }

  const onCreateClick = ()=>{
    setSelectedAction(null)
  }

  const onActionUpdateClick = (actionToUpdate : Action)=>{
    setSelectedAction(actionToUpdate);
  }

  const onActionDeletion = (deletedAction : Action) =>{
    setActions(
      actions.filter(
        (action)=>{
          if(action.id !== deletedAction.id){
            return action;
          }
        }
      )
    )
    getActionList()
  }

  const onAddToActionList = (actionToAdd: Action)=>{
    if(actionList){
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/action-list/addAction/${actionToAdd.id}`)
        .then(
          ()=> setActionList(new ActionList(actionList.id, [...actionList.actions,actionToAdd]))
        )
        .catch((error : AxiosError)=> setErrorMsg(error.message))
    }
  }


  return (
    <MessageContext.Provider value={value}>
    <Grid sx={{background:'black'}} className="App" minHeight='100vh'>

        {
          errorMsg&&
          (<Alert 
            variant="filled" 
            severity="error" 
            onClose={() => {setErrorMsg('')}}>
              {errorMsg}
          </Alert>)
        }
        
        <Snackbar 
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={!!successMsg} 
          onClose={()=>{setSuccessMsg("")}} 
          autoHideDuration={6000}
        >
          <Alert
            onClose={() => setSuccessMsg('')}
            severity="success"
            sx={{ width: '100%' }}
          >
            {successMsg}
          </Alert>
        </Snackbar>

        <Stack direction='column' paddingTop='15px' >

          <AppBar/> 

          {
            actionList&&
            <Box marginTop="30px" marginBottom='20px'>
              <Fifo actionList={actionList}></Fifo>
            </Box>
          }

          <Grid 
          direction={{xs:'column', md:'row'}} 
          container 
          spacing='50px' 
          paddingLeft='50px' 
          paddingRight='50px'  
          justifyContent='center'
          >

            <Grid item xs={10} md={6}>
                <ActionForm action={selectedAction} onSubmit={selectedAction? onActionUpdate : onActionCreation}/>
            </Grid>

            <Grid item  xs={10} md={6}>
                <ActionSearchableList 
                  actions={actions} 
                  onCreateClick={onCreateClick}
                  onAddToActionList={onAddToActionList}
                  onUpdateClick={onActionUpdateClick}
                  onDeleteClick={onActionDeletion}
                />
            </Grid>

          </Grid>
        
        <Box marginTop='20px' marginBottom='20px'>
          <Copyrights></Copyrights>
        </Box>
        </Stack>

    </Grid>
    </MessageContext.Provider>
        
  );
}

export default App;
