import React from 'react';
import HeaderTab from '../HeaderTab/HeaderTab';
import './NewsFeed.css';
import PostList from '../PostList/PostList';
import Post from './Post.js';
function NewsFeed() {
    return (
        <div className="NewsFeed">
            <HeaderTab/>
            <Post/>
            <PostList/>
        </div>
    )
}

export default NewsFeed