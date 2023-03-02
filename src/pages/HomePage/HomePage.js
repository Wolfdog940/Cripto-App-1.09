import { Box } from "@mui/system";
import React from "react";
import { CriptoCardContainer, NavBar ,AutoComplete } from "../../components/index";
import { styles } from "./styles";
import { useSelector } from 'react-redux'

const HomePage = () => {

  const auto =useSelector((state) =>state.autoComplete.autoComplete);  

  return (
    <Box component={"div"} sx={styles.home}>
      <NavBar />
      {auto?<AutoComplete/>:null}
      <CriptoCardContainer />

    </Box>
  );
};

export default HomePage;
