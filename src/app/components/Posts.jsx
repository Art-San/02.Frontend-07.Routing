import React from 'react'
import PostsList from "./PostsList"
import Post from "./Post"


const Posts = ({ match, history }) => {
  const posts = [ 
    {id: 1, label: 'post 1'},
    {id: 2, label: 'post 2'},
    {id: 3, label: 'post 3'},
  ]
 
  const postId = match.params.postId

  return (
    <>
      {postId ? (
            <Post posts={posts} id={postId} history={history}/>
        ) : (
            <PostsList posts={posts}/>
        )}
    </>
  )
}

export default Posts
