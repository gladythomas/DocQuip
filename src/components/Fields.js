import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Fields(props) {
  return (
    <div className="data_value">
              <h4>{props.name}</h4>
              <h4>{props.email}</h4>
             <h4><Button variant="contained" color="error">
            <DeleteIcon />
          </Button></h4> 
            </div>
  )
}

export default Fields
