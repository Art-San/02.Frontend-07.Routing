import React from 'react'
import PostsList from "./PostsList"
import Post from "./Post"
import { useParams } from 'react-router-dom'

const Posts = () => { // match заменим на хук useParams
  const params = useParams()
  const posts = [ 
    {id: 1, label: 'post 1'},
    {id: 2, label: 'post 2'},
    {id: 3, label: 'post 3'},
  ]
  const { postId } = params
  // const postId = match.params.postId

  return (
    <>
      {postId ? (
            <Post posts={posts} id={postId} />
        ) : (
            <PostsList posts={posts}/>
        )}
    </>
  )
}

export default Posts
