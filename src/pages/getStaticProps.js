const Post = ({ todos }) => {
  return (
    <>
      <h1>getStaticProps</h1>
      <ul>
        {todos.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Post

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await res.json()

  return {
    props: { todos },
  }
}
