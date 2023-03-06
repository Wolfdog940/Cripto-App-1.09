export const styles = {
  cardContainer: {
    display: "flex",
    marginTop: "80px",
    marginBottom: 0,
    justifyContent: "center",
    background: "rgba(56, 78, 117, 0.01)",
    height: "10%",
    width: "100%",
    boxShadow: "none",
  },
  cardContent: {
    width: {
      xl: "30%",
      xs: "95%",
    },
    borderRadius: "25px",
    background: "rgba(56, 78, 117, 0.01)",
    border: "none",
    boxShadow: "none",
  },
  autoComplete: {
    paddingRight: 0,
    height: "55px",
    background: "rgba(56, 78, 117, 0.9)",
    borderRadius: "10px",
    width: "100%",
  },
  boxButtonContainer: {
    display: "flex",
    alignItems: "center",
    background: "rgba(56, 78, 117, 0.01)",
    borderRadius: "10px",
    marginLeft: {
      xl: "5px",
    },
  },
  button: {
    background: "rgba(56, 78, 117, 0.4)",
    color: "gold",
    width: "50px",
    height: "50px",
    "&:hover": { background: "rgba(56, 78, 117, 0.9)" },
  },
};
