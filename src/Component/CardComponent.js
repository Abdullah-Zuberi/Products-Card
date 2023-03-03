import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Link from 'next/link';

export default function CardComponent(props) {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={props.data.title}
        subheader={props.data.price}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {props.data.description}<br/><br/>
          {props.data.category}<br/>
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        img  style={{width: 200, height: 200, objectFit:"contain"}} src={props.data.image} 
        alt="Product Images"
      />
       <CardActions>
        <Link href={`view/${props.data.id}`}>View Details</Link>
      </CardActions>
    </Card>
  );
}


