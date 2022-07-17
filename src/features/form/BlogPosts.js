import { useSelector, useDispatch } from "react-redux";
import { removePost, showMore } from "./formSlice";
import { Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DialogComponent from "../../components/DialogComponent";



const BlogPosts = () => {
    const { blogPosts } = useSelector(state => state.form)
    const dispatch = useDispatch();

    return (
        <article>
            {
                blogPosts.map((post) => {
                    return <Card sx={{marginTop:'2rem'}}>
                        <CardContent>
                            <Typography variant="h4" gutterBottom component="h4">
                                {post.title}
                            </Typography>
                            <Typography variant="h6" gutterBottom component="h6">
                                <i>{post.author}</i>
                            </Typography>
                            <Typography variant="body1" color="text.secondary" gutterBottom noWrap>
                                {post.content}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'space-between'}} >
                            <Button onClick={() => dispatch(showMore({title:post.title,author:post.author,content:post.content}))}>Show More</Button>
                            <Button  onClick={() => dispatch(removePost(post.id))} color="error" startIcon={<DeleteIcon />}>REMOVE</Button>
                        </CardActions>
                        <DialogComponent/>
                    </Card>
                })
            }
            
        </article>
    )
}

export default BlogPosts