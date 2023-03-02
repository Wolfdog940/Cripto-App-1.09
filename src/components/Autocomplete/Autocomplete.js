import React, {useEffect, useState } from "react";
import { Autocomplete, Card, TextField, Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import Slide from "@mui/material/Slide";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

const AutoComplete = () => {
 

const auto = useSelector((state) => state.autoComplete.autoComplete);
const[ coin , setCoin ] = useState()
const domLabel =document.querySelector("Coins")
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
    <Box
      sx={{
        display: "flex",
        marginTop: "80px",
        marginBottom: 0,
        justifyContent: "center",
        
        
      }}
    >
      <Slide direction="right" in={auto}>
        <Card
          sx={{
            width: "30%",
            borderRadius: "25px",
            background: "rgba(56, 78, 117, 0.9)",
            boxShadow: "none",
            
          }}
        >
          <Autocomplete
            {...defaultOptions}
            multiple={false}
            id="coin-selector"
            value={coin}
            getOptionLabel={(option) => option.id }
            onChange={(event, newValue) => {
              setCoin(newValue)
              console.log(AutoComplete.value)
              
              
            }}
            sx={{ paddingRight: 0, height: "55px" }}
            renderInput={(params) => (
              
              <TextField
              
                {...params}
                label="Coins"
                variant="outlined"
                sx={{ display: "flex", alignItems: "center" }}
                
                
              />
              
            )}
            
          />
          
          
        </Card>
        
      </Slide>
      <Slide direction="left" in={auto}>
        <Box sx={{display:"flex", alignItems:"center",background: "rgba(56, 78, 117, 0.4)",borderRadius:"15px",marginLeft:"5px"}}>
          <Link style={{ textDecoration: 'none',color:"#fff"}}  className="link" to={`/info/${coin?.id}`}>
            <Button>coin</Button>
            </Link>
          </Box>
        </Slide>
    </Box>
  );
};
export default AutoComplete;
