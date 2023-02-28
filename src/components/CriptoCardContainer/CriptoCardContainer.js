import React, { useState } from 'react'
import {CriptoCard ,Pagination} from '../index'
import { useQuery } from 'react-query';
import axios from "axios"
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styles } from "./styles"






const CriptoCardContainer = () => {

  

  const [page ,setPage]=useState(1)
 


  

  const { isLoading , data :coins  ,error} = useQuery({
    queryKey: ['projects', page],
    queryFn: () =>axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=${page}&sparkline=false`),
    onSuccess: () => console.log("ok"),
    select: (data) => data.data,

  });
  if (isLoading) return <Typography>...is loading</Typography>
  if (error) return <Typography>Se produjo un error</Typography>

  return (
    <Box  sx={styles.boxContainer}>
     <Grid  container sx={{marginTop:"160px",display:"flex",justifyContent:"center"}}>
      
      {coins.map((coin) => (
           
           <CriptoCard key={coin.id} coin ={coin}/>
         
       ))}
       <Pagination setPage={setPage} page ={page}/>
   </Grid >
   </Box>
   
   
   
    
  )
}

export default CriptoCardContainer