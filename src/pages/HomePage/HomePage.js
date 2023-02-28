import { Box } from "@mui/system";
import React from "react";
import { CriptoCardContainer, NavBar } from "../../components/index";
import { styles } from "./styles";

const HomePage = () => {
  return (
    <Box component={"div"} sx={styles.home} position="">
      <NavBar />
      <CriptoCardContainer />
    </Box>
  );
};

export default HomePage;
