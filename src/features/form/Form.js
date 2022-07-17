import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "./formSlice";
import { Button, TextField, Box } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Form = () => {
    const dispatch = useDispatch();
    const [post, setPost] = useState({
        id: '',
        title: '',
        author: '',
        content: ''
    });

    const handleChange = (e) => {
        setPost({
            ...post,
            id: nanoid(),
            [e.target.name]: e.target.value
        })
    };

    const enable = post.title && post.author && post.content;

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault(); dispatch(addPost(post)); setPost({
                    id: '',
                    title: '',
                    author: '',
                    content: ''
                })
            }}>
                <TextField
                    label="Title"
                    variant="standard"
                    color="warning"
                    margin="normal"
                    required
                    fullWidth
                    value={post.title} name='title' placeholder='title' onChange={handleChange}
                />
                <TextField
                    label="Author"
                    variant="standard"
                    color="warning"
                    margin="normal"
                    required
                    fullWidth
                    value={post.author} name='author' placeholder='author' onChange={handleChange}
                />
                <TextField
                    label="Content"
                    variant="standard"
                    color="warning"
                    margin="normal"
                    required
                    fullWidth
                    value={post.content} name="content" id="content" cols="10" rows={4} onChange={handleChange}
                />
                <Box textAlign='center'>
                    {enable ?
                        <Button type='submit' sx={{ margin: 'auto' }} variant="contained" endIcon={<SendIcon />}>POST</Button>
                        : <Button disabled>POST</Button>
                    }
                </Box>
            </form>

        </>
    )
}

export default Form