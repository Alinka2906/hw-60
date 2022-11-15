import React, {useState} from 'react';
import './Blog.css';
import {BlogPost} from "../../types";
import PostCard from "../../componens/PostCard/PostCard";

const Blog = () => {
  console.log('[Blog] render');
  const [posts, setPosts] = useState<BlogPost[]>([
    {title: 'Test Post', author: 'John Doe', id: '1'},
    {title: 'Hello, world', author: 'Jack Black', id: '2'},
    {title: 'Another example', author: 'Main Editor', id: '3'},
  ]);

  const [postFormShown, setPostFormShown] = useState(false);

  const togglePostForm = () => setPostFormShown(prev => !prev);

  let postForm = null;

  if (postFormShown) {
    postForm = (
      <section className="NewPost">
        <p>Post form will be here</p>
      </section>
    );
  }

  return (
    <>
      <section className="Posts">
        {posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            author={post.author}
          />
        ))}
      </section>
      <button onClick={togglePostForm}>
        New post
      </button>
      {postForm}
    </>
  )
};

export default Blog;