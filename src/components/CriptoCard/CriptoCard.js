import React, { useState, useEffect } from "react";
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
import { Link, useLocation, useParams } from "react-router-dom";

const CriptoCard = (props) => {
  const intl = useIntl();

  const { coin } = props;

  const { pathname } = useLocation();

  return (
    <Grid xl={3} xs={12} sm={4} sx={styles.gridContainer}>
      <Card sx={styles.card}>
        
        {pathname.includes("info") ? (
          <Box sx={styles.cardMediaBox}>
            <CardMedia
              sx={styles.cardMedia}
              component="img"
              alt={coin.id}
              image={coin?.image?.large}
            />
          </Box>
        ) : <Box sx={styles.cardMediaBox}>
        <CardMedia
          sx={styles.cardMedia}
          component="img"
          alt={coin.id}
          image={coin.image}
        />
      </Box>}

        <CardContent>
          <Box sx={styles.criptoNameBox}>
            <Typography gutterBottom variant="h5" component="div">
              {coin.name}
            </Typography>
          </Box>
          <Typography variant="body2" sx={styles.currentPrice}>
            {intl.formatMessage({ id: "card.price" })}{" "}
            {`${coin.current_price} €`}
          </Typography>
          <Box sx={styles.higthPrice}>
            <PriceVariation> {`${coin.high_24h?.toFixed(1)} €`}</PriceVariation>
            <ArrowUpwardIcon sx={styles.ArrowUpwardIcon} />
          </Box>
          <Box sx={styles.lowPrice}>
            <PriceVariation>{`${coin.low_24h?.toFixed(1)} €`}</PriceVariation>
            <ArrowDownwardIcon sx={styles.ArrowDownwardIcon} />
          </Box>
        </CardContent>
        {!pathname.includes("info") ? (
          <CardActions>
            <Link to={`/info/${coin.id}`}>
              <Button size="small">
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
