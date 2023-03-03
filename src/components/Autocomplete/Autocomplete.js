import React, { useState } from "react";
import { useIntl } from "react-intl";
import {
  Autocomplete,
  Card,
  TextField,
  Box,
  Typography,
  Button,
  CardContent,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";
import Slide from "@mui/material/Slide";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";


const AutoComplete = () => {

  const intl = useIntl();


  const auto = useSelector((state) => state.autoComplete.autoComplete);
  const [coin, setCoin] = useState();
  const domLabel = document.querySelector("Coins");
  const {
    isLoading,
    data: coins,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () =>
      axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      ),
    onSuccess: () => console.log("ok"),
    select: (data) => data.data,
  });

  if (isLoading) return <Typography>...is loading</Typography>;
  if (error) return <Typography>Se produjo un error</Typography>;

  const defaultOptions = {
    options: coins.length > 0 ? coins : [],
    getOptionLabel: (options) => options.id,
  };

  return (
    <Grid  xs={12} >
      <Card
    sx={{
      display: "flex",
      marginTop: "80px",
      marginBottom: 0,
      justifyContent: "center",
      background: "rgba(56, 78, 117, 0.01)",
      height:"10%",
      width:"100%",
      boxShadow:"none"
    }}
  >
    <Slide direction="right" in={auto}>
      <CardContent
        sx={{
          width: "30%",
          borderRadius: "25px",
          background: "rgba(56, 78, 117, 0.01)",
          border:"none",
          boxShadow: "none",
          
        }}
      >
        <Autocomplete
          {...defaultOptions}
          multiple={false}
          id="coin-selector"
          value={coin}
          getOptionLabel={(option) => option.id}
          onChange={(event, newValue) => {
            setCoin(newValue);
            console.log(AutoComplete.value);
          }}
          sx={{ paddingRight: 0,
                height: "55px",
                background: "rgba(56, 78, 117, 0.9)",
                borderRadius:"10px",
                width:"100%" }}

          renderInput={(params) => (
            <TextField
              {...params}
              label={intl.formatMessage({id:"imputCoin"})}
              variant="outlined"
              sx={{ display: "flex", alignItems: "center"}}
            />
          )}
        />
      </CardContent>
    </Slide>
    <Slide direction="left" in={auto}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: "rgba(56, 78, 117, 0.01)",
          borderRadius: "10px",
          marginLeft: "5px",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "#fff" }}
          className="link"
          to={`/info/${coin?.id}`}
        >
          <Button sx={{background: "rgba(56, 78, 117, 0.9)"}} >{intl.formatMessage({id:"searchButton"})}</Button>
        </Link>
      </Box>
    </Slide>
  </Card></Grid>
    
  );
};
export default AutoComplete;
