import * as React from 'react';
import './deletepopup.css';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Alert from '@mui/material/Alert';

export default function SimplePopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [alert, setalert] = React.useState(false);


  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const deletealert = () =>{
    setalert("delete");
    handleClick();
    setTimeout(function(){
        setalert(false);
   }.bind(),2000);
  }

  const nodeletealert = ()=>{
    setalert("notdelete");
    handleClick();
    setTimeout(function(){
        setalert(false);
   }.bind(),2000);
  }

  return (
    <div>
        <div className='alertdiv'>{alert=="delete" ? <Alert severity='success'>Element deleted succesfully</Alert> : alert=="notdelete"? <Alert severity='error'>Unable to delete assessment</Alert>:<></> }</div>
      <button aria-describedby={id} type="button" onClick={handleClick} className='butt'>
        {props.button}
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          <p>Are you sure you want to delete?</p>
          <div className='popperbuttons'>
            <button onClick={deletealert} className='popbuts'>Yes</button>
            <button onClick={nodeletealert} className='popbuts'>Cancel</button>
          </div>
        </Box>
      </Popper>
    </div>
  );
}
