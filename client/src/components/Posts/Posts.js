import React from 'react';
import {useSelector} from 'react-redux';
import Post from './Post/Post.js';
import useStyles from './styles';;
function Posts() {
    const posts= useSelector((state)=> state.posts);
    const classes = useStyles();
    console.log(posts);
    return (
        <div>
            <h1>POSTS</h1>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts
