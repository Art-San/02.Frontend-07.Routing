// import React, { useEffect} from 'react'
// import PostsList from "./PostsList"
// import Post from "./Post"
// import query from 'query-string'
// import _ from 'lodash'

// const Posts = ({ match, location }) => {
//   const posts = [ 
//     {id: 1, label: 'post 1'},
//     {id: 2, label: 'post 2'},
//     {id: 3, label: 'post 3'},
//   ]
//   const search = query.parse(location.search)
//   useEffect(() => {
//   console.log(search)
//   }, [search])
//   // console.log('serch', search) // {count: '1', sortBy: 'newest'} // Query-параметры
//   const postId = match.params.postId
//   const cropPosts = search
//       ? _(posts).slice(0).take(search.count).value()
//       : posts
//   console.log(cropPosts)
//   return (
//     <>
//       {postId ? (
//             <Post posts={posts} id={postId} />
//         ) : (
//             <PostsList posts={cropPosts}/>
//         )}
//     </>
//   )
// }

// export default Posts

// // Если на 02:54 при выводе через console.log() у тебя возникают ошибки, 
// // то выводи объект search в хуке useEffect():

import React, { useState, useEffect } from "react";
import PostsList from "./PostsList";
import Post from "./Post";
import query from 'query-string'
// Перейдём на адрес “/posts?fromUrl=https://example.partner.com&block=pr_1”

const Posts = ({ match, location }) => {
  const [showOffer, setShowOffer] = useState(false);

  const posts = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
      { id: 3, title: "Post 3" }
  ];

  const search = query.parse(location.search);
  const { fromUrl, block } = search;
  console.log('fromUrl, block', fromUrl, block)

  useEffect(() => {
      if (!showOffer && fromUrl && block) {
          setShowOffer(true);
      }
  }, [fromUrl, block, showOffer]);

  const postId = match.params.postId;
  const getPost = (postId) => posts.find(({ id }) => String(id) === postId);

  return (
      <>
          {showOffer && <div>Специальное предложение</div>}
          {postId ? (
              <Post post={getPost(postId)} id={postId} />
          ) : (
              <PostsList posts={posts} />
          )}
      </>
  );
};

export default Posts;