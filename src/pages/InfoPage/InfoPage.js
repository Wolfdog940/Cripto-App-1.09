import React from "react";
import { CriptoCard } from "../../components/index";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { IconButton, Typography } from "@mui/material";
import { styles } from "./styles";
import { Box } from "@mui/system";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useDispatch } from "react-redux";
import { setAutoComplete } from "../../store/slices/autoCompleteSlice";

export const InfoPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

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
      trade_url:data.data.links?.homepage[0]
    }),
  });


  if (isLoading) return <Typography>...is loading</Typography>;
  if (error) return <Typography>Se produjo un error</Typography>;

  return (
    <Box sx={styles.box}>
      
        <Box sx={styles.boxContainer}>
          <Link to="/">
            <IconButton variant="outlined" sx={{background: "rgba(56, 78, 117, 0.4)"}} onClick={dispatch(setAutoComplete(false))}>
              <HomeRoundedIcon sx={styles.HomeRoundedIcon}/>
            </IconButton>
          </Link>
        </Box>
        <Box sx={styles.criptoCardBox}>
        <CriptoCard id={id} coin={coin} />
      </Box>
    </Box>
  );
};
