import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button sx={{marginTop:"10px",height:"150px"}} key="one">Football</Button>,
  <Button sx={{marginTop:"10px",height:"150px"}} key="two">It area</Button>,
  <Button sx={{marginTop:"10px",height:"150px"}} key="three">Music</Button>,
];

export default function Navbar() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        width:"270px",
      height:"300px"},
      }}
    >
      <ButtonGroup 
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}