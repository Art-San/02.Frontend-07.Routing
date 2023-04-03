import React from 'react'
import { useHistory } from 'react-router-dom'


const Post = ({ id, posts }) => {
    const history = useHistory()
    const getPostById = (id) => {
        return posts.find((post) => post.id.toString() === id)
    }
    const hanleSave = () => {
      history.push('/posts')
      // history.replace('/posts')
    }
    const post = getPostById(id)
  return (
    <>
    {' '}
    <h2>{post ? post.label : `Пост c этим id:${id} не найден`}</h2>
    <button
        onClick={() => {
          hanleSave()
      }}
    >
        Сохранить
    </button>
    </>
  )
}

export default Post