import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    borderRadius: '10px',
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
  fileUpload: {
    width: '97%',
    margin: '10px 0',
  },
}));