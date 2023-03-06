import { Box, Button, ButtonGroup } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styles } from "./styles";

const Pajination = ({ page, setPage }) => {
    
  const NextPage = () => {
    setPage(page + 1);
    console.log(page);
  };

  const PrePage = () => {
    setPage(page - 1);
    console.log(page);
  };

  return (
    <Box sx={styles.boxContainer}>
      <ButtonGroup sx={styles.ButtonGroup}>
        <Button disabled={page < 2} onClick={PrePage}>
          <ArrowBackIosIcon sx={styles.ArrowBackIosIcon} />
        </Button>
        <Button onClick={NextPage}>
          <ArrowForwardIosIcon  sx={styles.ArrowForwardIosIcon} />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Pajination;
