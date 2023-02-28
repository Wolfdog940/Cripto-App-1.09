import { Box, Button, ButtonGroup } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
    <Box sx={{ marginTop: "10px", background: "rgba(56, 78, 117, 0.4)" }}>
      <ButtonGroup sx={{ display: "flex", justifyContent: "center" }}>
        <Button disabled={page < 2} onClick={PrePage}>
          <ArrowBackIosIcon />
        </Button>
        <Button onClick={NextPage}>
          <ArrowForwardIosIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Pajination;
