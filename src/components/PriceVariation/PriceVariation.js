import { Box } from '@mui/system'
import React from 'react'

const PriceVariation = (props) => {
  return (
    <Box component="div">{props.children}</Box>
  )
}

export default PriceVariation