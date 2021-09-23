import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

import useStyles from './styles';

//Following the template add textfield, buttons and props with typography   * note to self need file transfer ability for pics

const Form = ({ currentId, setCurrentId}) => {
  const [postInfo, setPostInfo] = useState({
    author:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:''
  });
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostInfo(post);
  }, [post])

  const handleSubmit = (event) => {
    event.preventDefault();

    if(currentId) {
      dispatch(updatePost(currentId, postInfo));
      clear();
    } else {
      dispatch(createPost(postInfo));
      clear();
    }

    dispatch(createPost(postInfo));

  };

  const clear = () => {
    setCurrentId(null);
    setPostInfo({ author: '', title: '', message: '', tags: '', selectedFile: ''});

  }


  return (
    <Paper className={classes.paper} elevation={0}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h5">{currentId ? 'Edit' : 'Submit'} Form</Typography>
        <TextField 
          className={classes.textfield}
          name="author"
          variant="outlined"
          label="Author"
          value={postInfo.author}
          fullWidth
          onChange={(e) => setPostInfo({ ...postInfo, author: e.target.value })}
          />

          <TextField
          className={classes.textfield}
          name="title"
          variant="outlined"
          label="Title"
          value={postInfo.title}
          fullWidth
          onChange={(e) => setPostInfo({ ...postInfo, title: e.target.value })}
          />

          <TextField   
          className={classes.textfield}
          name="message"
          variant="outlined"
          label="Message"
          value={postInfo.message}
          fullWidth
          onChange={(e) => setPostInfo({ ...postInfo, message: e.target.value })}
          />

          <TextField
          className={classes.textfield}
          name="tags"
          variant="outlined"
          label="Tags"
          value={postInfo.tags}
          fullWidth
          onChange={(e) => setPostInfo({ ...postInfo, tags: e.target.value })}
          />

          <div className={classes.fileUpload}>
            <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setPostInfo({ ...postInfo, selectedFile: base64})} 
            />
          </div>

          <Button 
          className={classes.buttonSubmit}
          variant="outlined"
          color="primary"
          type="submit"
          startIcon={<CloudUploadIcon />}
          size="large" 
          fullWidth>Submit
          </Button>

          <Button
          variant="outlined"
          color="secondary"
          startIcon={<DeleteIcon />}
          size="large"
          onClick={clear}
          fullWidth>Delete
          </Button>
      </form>
    </Paper>
  );
}

export default Form;
