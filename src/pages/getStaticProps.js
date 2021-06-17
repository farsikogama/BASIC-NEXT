import Card from '../components/Card/Card'
import styles from '../styles/Home.module.css'

const Post = ({ todos }) => {
  return (
    <>
      <h1>getStaticProps</h1>
      <div className={styles.container}>
        {todos.map(item => (
          // <li key={item.id}>{item.title}</li>
          <Card
            name={item.id}
            profilePict='/img/img2.jpg'
            postImg='/img/img2.jpg'
            postText={item.title}
          />
        ))}
      </div>
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

{
  /* <Card
  name='Pak Sudirman'
  profilePict='/img/img2.jpg'
  postImg='/img/img2.jpg'
  postText='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
/> */
}
