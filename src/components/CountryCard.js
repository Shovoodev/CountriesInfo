import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CountryCard(props) {
  return (
    <>  
    <div className='flex items-center text-center'>
      <Card sx={{ maxWidth: 345 ,width: 250 }}>
      <CardMedia
        component="img"
        alt={props.name}
        height="140"
        image= {props.flagUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.capital} | {props.population}
        </Typography>
      </CardContent>
    </Card>
    </div>
    </>
  );
}