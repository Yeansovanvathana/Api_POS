import React from "react";
import { CardMedia, CardContent,Typography} from '@mui/material';
export const Product = (props) => {
  return (
  <div className= "product-card">
    <CardMedia
    component='img'
    height= '250'
    image={props.image}
    alt = "cards"
    />
    <CardContent>
      <div className="ContentRow">
        <div>
          <Typography sx={{color : "#000000", fontWeight: 'bold', fontFamily: "Poppins", fontSize: 16}}>{props.name}</Typography>
        </div>
        <div>
          <Typography sx={{color : "#FF8811", fontWeight: 'bold', fontFamily: "Poppins"}}>$ {props.price} </Typography>
        </div>
      </div>
    </CardContent> 
  </div> 
    
  );
};
