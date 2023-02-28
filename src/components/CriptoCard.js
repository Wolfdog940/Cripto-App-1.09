import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import PriceVariation from './PriceVariation';
import { Box } from '@mui/system';
import { useIntl } from "react-intl"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CriptoCard = (props) => {

  const { coin } = props;

  const intl = useIntl()



  return (

  <Grid  xl={3} xs={12} sm={4} sx={{ background: "trasparent", display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "100%",height:"300px", margin: "5px", background: "rgba(56, 78, 117, 0.4)"}}>
        <Box sx={{ display: "flex", justifyContent: "center",marginTop:"10px" }}>
        <CardMedia
          sx={{ width: "90px"}}
          component="img"
          alt="green iguana"
          image={coin.image} />
        </Box>
        <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center"}}>
          <Typography gutterBottom variant="h5" component="div">
            {coin.id}
          </Typography>
          </Box>
          <Typography variant="body2" color="rgba(99, 176, 201, 1) ">
            
          {intl.formatMessage({id:"card.price"})} {`${coin.current_price} €`}  
          </Typography>
          <Box sx={{color:" rgba(137, 224, 121, 0.5)" ,width:"50%",marginTop:"10px",display:"flex", flexDirection:"row"}}>
            <PriceVariation > {`${coin.high_24h.toFixed(2)} €`}</PriceVariation>
            <ArrowUpwardIcon sx={{color:"green" ,fontSize:"medium" ,marginLeft:"20px",boxShadow:"0px 0px 3px 2px rgb(10, 221, 10)"}}/>
          </Box>
          <Box sx={{color:" rgba(224, 16, 19, 0.5)" ,width:"33%" ,display:"flex", flexDirection:"row",marginTop:"10px"}}>
          <PriceVariation >{`${coin.low_24h.toFixed(2)} €`}</PriceVariation>
          <ArrowDownwardIcon sx={{backgroundColor:"rgba(255,0,0,0.2)", color:"red",fontSize:"medium",marginLeft:"20px" ,boxShadow:"0px 0px 3px 2px #f80d04"}}/>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">{intl.formatMessage({id:"card.moreinfo"})}</Button>
        </CardActions>
      </Card>

    </Grid>
    
    



  )
}



export default CriptoCard
