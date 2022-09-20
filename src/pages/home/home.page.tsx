import React from 'react';
import PostsGrid from "../../components/posts-grid/posts-grid-component";
import {useGetPosts} from "../../hooks/posts/useGetPosts";

const HomePage:React.FC = () => {
    const posts = useGetPosts();
    return (
        <div className="home">
            <PostsGrid posts={posts || []} />
        </div>
    );
};

export default HomePage;
