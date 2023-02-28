import React from 'react'
import { CriptoCard } from '../../components/index'
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom"
import axios from "axios"
import { Typography } from '@mui/material';

export const InfoPage = () => {

  const { id } = useParams()
  

  const { isLoading , data :coin  ,error} = useQuery({
    queryKey: ['projects', id],
    queryFn: () =>axios.get("https://api.coingecko.com/api/v3/coins/"+id),
    onSuccess: () => console.log("ok"),
    select: (data) => data.data,

  });
  if (isLoading) return <Typography>...is loading</Typography>
  if (error) return <Typography>Se produjo un error</Typography>


  return (
    <CriptoCard id={id} 
                coin={coin} 
                name={coin.name} 
                current_price={coin?.market_data?.current_price?.symbol} 
                high_24h={coin?.high_24h?.symbol} 
                low_24h={coin?.low_24h?.symbol}  
                image={coin?coin.image.large:null}
                />
  )

}