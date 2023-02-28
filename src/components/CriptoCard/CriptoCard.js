import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import PriceVariation from '../PriceVariation/PriceVariation';
import { Box } from '@mui/system';
import { useIntl } from "react-intl"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styles } from "./styles"

const CriptoCard = (props) => {

  const { coin } = props;

  const intl = useIntl()



  return (

  <Grid  xl={3} xs={12} sm={4} sx={styles.gridContainer}>
      <Card sx={styles.card}>
        <Box sx={styles.cardMediaBox}>
        <CardMedia
          sx={styles.cardMedia}
          component="img"
          alt="green iguana"
          image={coin.image} />
        </Box>
        <CardContent>
        <Box sx={styles.criptoNameBox}>
          <Typography gutterBottom variant="h5" component="div">
            {coin.id}
          </Typography>
          </Box>
          <Typography variant="body2" sx={styles.currentPrice}>
            
          {intl.formatMessage({id:"card.price"})} {`${coin.current_price} €`}  
          </Typography>
          <Box sx={styles.higthPrice}>
            <PriceVariation > {`${coin.high_24h.toFixed(1)} €`}</PriceVariation>
            <ArrowUpwardIcon sx={styles.ArrowUpwardIcon}/>
          </Box>
          <Box sx={styles.lowPrice}>
          <PriceVariation >{`${coin.low_24h.toFixed(1)} €`}</PriceVariation>
          <ArrowDownwardIcon sx={styles.ArrowDownwardIcon}/>
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
