import Card from '@mui/material/Card';
import { CardContent, CardActionArea, Typography} from '@mui/material';

const Cards = (props) => {
  return (
    <Card className= "product-card">
    <CardActionArea>
      <CardContent>
        <div className="ContentRow">
          <div className="Row1">
            <Typography sx={{fontSize: 12}} >{props.title}</Typography>
            <div id="card-icon">{props.icon}</div>
          </div>
          <div className="price">
            <Typography sx={{color: "#1C3683" , fontWeight: "bold", fontSize: 32}} >{props.amount} </Typography>
          </div>
          <div className="Cart">
          </div>
        </div>
      </CardContent>
    </CardActionArea>
  </Card> 

  );
};

export default Cards;
