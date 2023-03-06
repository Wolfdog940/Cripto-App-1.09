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
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
} from "@mui/material";
import { useSelector } from "react-redux";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";
import Modal from "../Modal.js/Modal";
import { marketURL } from "../../services/common";
import { useGetCoinsQuery } from "../../services/api";

const AutoComplete = () => {
  const intl = useIntl();
  const nav = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const auto = useSelector((state) => state.autoComplete.autoComplete);
  const [coin, setCoin] = useState();

  const {
    isLoading,
    data: coins,
    error,
  } = useGetCoinsQuery({
    select: (data) => data.data,
  });

  const defaultOptions = {
    options: coins?.length > 0 ? coins : [],
    getOptionLabel: (options) => options.id,
  };

  const handleSearchButtonClick = () => {
    coin ? nav(`/info/${coin.id}`) : openModal();
  };

  if (isLoading) return <Typography>...is loading</Typography>;

  if (error) return <Typography>Se produjo un error</Typography>;

  return (
    <Grid xs={12}>
      <Card sx={styles.cardContainer}>
        <Slide direction="right" in={auto}>
          <CardContent sx={styles.cardContent}>
            <Autocomplete
              {...defaultOptions}
              multiple={false}
              id="coin-selector"
              value={coin}
              getOptionLabel={(option) => option.id}
              onChange={(event, newValue) => {
                setCoin(newValue);
              }}
              sx={styles.autoComplete}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={intl.formatMessage({ id: "imputCoin" })}
                  variant="outlined"
                  sx={{ display: "flex", alignItems: "center" }}
                />
              )}
            />
          </CardContent>
        </Slide>
        <Slide direction="left" in={auto}>
          <Box sx={styles.boxButtonContainer}>
            <IconButton sx={styles.button} onClick={handleSearchButtonClick}>
              <Typography fontWeight={"bold"}>
                {intl.formatMessage({ id: "searchButton" })}
              </Typography>
            </IconButton>
          </Box>
        </Slide>
      </Card>
      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>{intl.formatMessage({ id: "modalTitle" })}</DialogTitle>
        <DialogContent>{intl.formatMessage({ id: "modalBody" })}</DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={closeModal}>
            {intl.formatMessage({ id: "modalCloseButton" })}
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
export default AutoComplete;
