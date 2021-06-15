const Post = ({ todo }) => {
  return (
    <>
      <h1>getStaticPaths</h1>
      <p>user Id : {todo.userId}</p>
      <p>id : {todo.id}</p>
      <p>title : {todo.title}</p>
      <p>status : {todo.completed.toString()}</p>
    </>
  )
}

export default Post

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.staticId}`
  )
  const todo = await res.json()

  return {
    props: { todo },
  }
}
//  bisa diisi params atau context

// static paths specific paths
// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { staticId: '3' } }],
//     fallback: false,
//   }
// }

// static paths all paths
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const todos = await res.json()

  const paths = todos.map(item => ({
    params: { staticId: item.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}
