import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonSubmit: {
    marginTop: 10,
    marginBottom: 5,
  },
  textfield: {
    margin: 1,

  },
}));