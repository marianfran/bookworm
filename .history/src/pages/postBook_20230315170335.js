import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard({props}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.category}
        </Typography>
        <Typography variant="body2">
          Written By: {props.author}
        </Typography>
      </CardContent>
    </Card>
  );
}




// import styles from '@/styles/Home.module.css'
// export function Book( props ) {

//     return (
//         <div key={props.key} className={styles.book}>
//             <h3>{props.name}</h3>
//             <p>Author: {props.author}</p>
//             <p>Book Genre: {props.category}</p>
//         </div>
//     )
// }