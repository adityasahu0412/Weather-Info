import * as React from 'react';
import Box from '@mui/material/Box';
import './Rating.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box  className="rate" sx={{ '& > legend': { mt: 2 } }}>
      <Typography className='typo' component="legend">Give Rating</Typography>
      <Rating className="rating"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}


