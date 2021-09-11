import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles';

//Following the template add textfield, buttons and props with typography   * note to self need file transfer ability for pics

const Form = () => {
  const [postInfo, setPostInfo] = useState({
    author:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:''
  });

  const handleSubmit = () => {

  }

  const classes = useStyles();


  return (
    <Paper className={classes.paper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h6">Submit Form</Typography>
        <TextField 
          className={classes.textfield}
          name="author"
          variant="outlined"
          label="Author"
          value={postInfo.author}
          onChange={(e) => setPostInfo({ author: e.target.value })}
          />
          <TextField
          className={classes.textfield}
          name="title"
          variant="outlined"
          label="Title"
          value={postInfo.title}
          onChange={(e) => setPostInfo({ title: e.target.value })}
          />
          <TextField           className={classes.textfield}
          name="message"
          variant="outlined"
          label="Message"
          value={postInfo.message}
          onChange={(e) => setPostInfo({ message: e.target.value })}
          />
          <TextField           className={classes.textfield}
          name="tags"
          variant="outlined"
          label="Tags"
          value={postInfo.tags}
          onChange={(e) => setPostInfo({ tags: e.target.value })}
          />
          <TextField           className={classes.textfield}
          name="selectedFile"
          variant="outlined"
          label="Selected File"
          value={postInfo.selectedFile}
          onChange={(e) => setPostInfo({ selectedFile: e.target.value })}
          />
          <Button 
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          startIcon={<CloudUploadIcon />}
          size="large" 
          fullWidth>Submit</Button>
          <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          size="large"
          fullWidth>Delete</Button>
      </form>
    </Paper>
  )
}

export default Form;
