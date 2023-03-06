import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import PriceVariation from "../PriceVariation/PriceVariation";
import { Box } from "@mui/system";
import { useIntl } from "react-intl";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { styles } from "./styles";
import { Link, useLocation } from "react-router-dom";


const CriptoCard = ({coin}) => {
  const intl = useIntl();

 //const { coin ,image ,name ,currentPrice ,high_24 ,low_24} = props;


  const {image, name, currentPrice, high_24, low_24 ,id ,trade_url} = coin;

  const { pathname } = useLocation();

  return (
    <Grid item xl={3} xs={12} sm={4} sx={styles.gridContainer} >
      <Card sx={styles.card}>
      <Box sx={styles.cardMediaBox}>
        <CardMedia
          sx={styles.cardMedia}
          component="img"
          alt={coin?.id}
          image={image}
        />
      </Box>

        <CardContent>
          <Box sx={styles.criptoNameBox}>
            <Typography gutterBottom variant="h5" component="div" sx={styles.texName}>
              {name}
            </Typography>
          </Box>
          <Typography variant="body2" sx={styles.currentPrice}>
            {intl.formatMessage({ id: "card.price" })}{" "}
            {`${currentPrice} €`}
          </Typography>
          <Box sx={styles.bottonContentBox}>
        <Box sx={{display:"flex" ,flexDirection:"column"}}>
        <Box sx={styles.higthPrice}>
            <PriceVariation> {high_24.toFixed(1)}</PriceVariation>
            <ArrowUpwardIcon sx={styles.ArrowUpwardIcon} />
          </Box>
          <Box sx={styles.lowPrice}>
            <PriceVariation>{low_24?.toFixed(1)}</PriceVariation>
            <ArrowDownwardIcon sx={styles.ArrowDownwardIcon} />
          </Box>
        </Box>
        {pathname.includes("info")? 
        (<Box  sx={styles.link}>
          <a style={{ textDecoration: 'none',color:"#fff"}}   target="_blank" href={trade_url}>{intl.formatMessage({ id: "infoCardLink" })}</a>
          </Box>):null}
          </Box>
        </CardContent>
        {!pathname.includes("info") ? (
          <CardActions>
            <Link style={{ textDecoration: 'none',color:"#fff"}}  to={`/info/${id}`}>
              <Button size="small" sx={styles.moreInfo}>
                {intl.formatMessage({ id: "card.moreinfo" })}
              </Button>
            </Link>
          </CardActions>
        ) : null}
      </Card>
    </Grid>
  );
};

export default CriptoCard;
