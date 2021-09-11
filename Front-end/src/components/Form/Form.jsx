import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

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
        <Typography>Submit Form</Typography>
        <TextField 
          name="author"
          variant="standard"
          label="author"
          value={postInfo.author}
          onChange={(e) => setPostInfo({ author: e.target.value })}
          />
          <TextField 
          name="title"
          variant="standard"
          label="title"
          value={postInfo.title}
          onChange={(e) => setPostInfo({ title: e.target.value })}
          />
          <TextField 
          name="message"
          variant="standard"
          label="message"
          value={postInfo.message}
          onChange={(e) => setPostInfo({ message: e.target.value })}
          />
          <TextField 
          name="tags"
          variant="standard"
          label="tags"
          value={postInfo.tags}
          onChange={(e) => setPostInfo({ tags: e.target.value })}
          />
          <TextField 
          name="selectedFile"
          variant="standard"
          label="selectedFile"
          value={postInfo.selectedFile}
          onChange={(e) => setPostInfo({ selectedFile: e.target.value })}
          />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth>Submit</Button>
      </form>
    </Paper>
  )
}

export default Form;
