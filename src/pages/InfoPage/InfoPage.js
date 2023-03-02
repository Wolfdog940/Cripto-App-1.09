import React from "react";
import { CriptoCard } from "../../components/index";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Grid, Typography } from "@mui/material";
import { styles } from "./styles";
import { Box } from "@mui/system";

export const InfoPage = () => {
  const { id } = useParams();

  const {
    isLoading,
    data: coin,
    error,
  } = useQuery({
    queryKey: ["projects", id],
    queryFn: () => axios.get("https://api.coingecko.com/api/v3/coins/" + id),
    onSuccess: () => console.log(id),
    select: (data) => ({
      image: data.data.image.large,
      name: data.data.name,
      currentPrice: data.data.market_data.current_price.eur,
      high_24: data.data.market_data.high_24h.eur,
      low_24: data.data.market_data.low_24h.eur,
    }),
  });

  console.log(coin);

  if (isLoading) return <Typography>...is loading</Typography>;
  if (error) return <Typography>Se produjo un error</Typography>;

  return (
    <Box sx={styles.box}>
       <Card sx={styles.card}>
        <CriptoCard
        id={id}
        coins={coin}
        image={coin.image}
        name={coin.name}
        currentPrice={coin.currentPrice}
        high_24={coin.high_24}
        low_24={coin.low_24}
      />
      </Card>
      
    
    </Box>
   
  );
};
