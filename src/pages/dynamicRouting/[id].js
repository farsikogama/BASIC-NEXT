import { useRouter } from 'next/router'

const Post = ({ todo }) => {
  //   cara 1 pakai useRouter
  // const router = useRouter()
  // const { id } = router.query //ngambil params id yang ada di url

  return (
    <>
      <h1> Dynamic Routing</h1>
      {/* cara 1 dan 2 */}
      {/* <h1> id : {id}</h1> */}

      {/* cara 2.1 */}
      <h1> id : {todo.id}</h1>
      <h1> title : {todo.title}</h1>
    </>
  )
}

export default Post

// cara 2 pakai params
// Kalau pakai static props di dynamic routing [id] harus barengan dengan getStaticPaths
// export async function getServerSideProps({ params }) {
//   return { props: { id: params.id } }
// }
// masukin { id } di props

// cara 2.3 pakai params server side props
// Kalau pakai static props di dynamic routing [id] harus barengan dengan getStaticPaths
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  )
  const todo = await res.json()

  return {
    props: { todo },
  }
}
// masukin { todo } di props
