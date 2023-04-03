import React from 'react'

const Post = ({ id, posts, history }) => {
    const getPostById = (id) => {
        return posts.find((post) => post.id.toString() === id)
    }
    const hanleSave = () => {
      // history.push('/posts') // Можем вернутся назад
      history.replace('/posts') // не вернется назад после редактирования
    }
    const post = getPostById(id)
  return (
    <>
    {' '}
    <h2>{post ? post.label : `Пост c этим id:${id} не найден`}</h2>
    <button
      onClick={hanleSave} >Сохранить</button>
    </>
  )
}

export default Post