import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Language } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setLanguage } from "../store/slices/languageSlice";
import { useIntl } from "react-intl";

function Nabvar() {
  const intl = useIntl();

  const dispatch = useDispatch();

  const languagesArray = [
    intl.formatMessage({ id: "menu.spanish" }),
    intl.formatMessage({ id: "menu.english" }),
    intl.formatMessage({ id: "menu.portuguese" }),
  ];

  const [showLanguages, setShowLanguages] = useState(false);

  const [targetLanguage, settargetLanguage] = useState("");

  const hadleOpenList = () => setShowLanguages(true);

  const handleCloseList = () => setShowLanguages(false);

  const localeFunction = () => {
    if (targetLanguage === intl.formatMessage({ id: "menu.spanish" })) {
      dispatch(setLanguage("es"));
    } else if (targetLanguage === intl.formatMessage({ id: "menu.english" })) {
      dispatch(setLanguage("en"));
    } else if (
      targetLanguage === intl.formatMessage({ id: "menu.portuguese" })
    ) {
      dispatch(setLanguage("pt"));
    }
  };

  useEffect(() => {
    localeFunction();
  }, [targetLanguage]);

  return (
    <Box>
      <AppBar position="fixed" sx={{ background: "rgba(56, 78, 117, 0.9)" }}>
        <Toolbar variant="dense">
          <IconButton
            aria-controls={showLanguages ? "basic-menu" : undefined} //que es esto
            aria-haspopup="true"
            aria-expanded={showLanguages ? "true" : undefined}
            styles={{ position: "absolute", top: 16, right: 16 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onClick={() => {
              hadleOpenList();
            }}
          >
            <Language fontSize="large" />
          </IconButton>
          <Menu
            id="basic-menu"
            sx={{ top:30 }}
            open={showLanguages}
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            onClose={handleCloseList}
          >
            {languagesArray.map((avaliableLanguages, index) => (
              <MenuItem
                value={avaliableLanguages}
                key={index}
                onClick={(e) => {
                  settargetLanguage(e.target.innerText);
                  console.log(e.target.innerText);
                  handleCloseList();
                }}
              >
                {avaliableLanguages}
              </MenuItem>
            ))}
          </Menu>
          <Typography
            variant="h6"
            component="div"
            color="rgba(99, 176, 201, 1) "
          >
            {intl.formatMessage({ id: "navbar.appName" })}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nabvar;
