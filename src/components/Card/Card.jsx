import styles from './Card.module.css'

const Card = props => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.row}>
          <div className={styles.profile}>
            <img src={props.profilePict} />
          </div>
          <p>
            <span>{props.name}</span>
          </p>
        </div>
        <div className={styles.main}>
          <img src={props.postImg} />
        </div>
        <div className={styles.row}>
          <div className={styles.action}>
            <img src='/img/icon-heart.png' />
          </div>
          <div className={styles.action}>
            <img src='/img/icon-comment.png' />
          </div>
          <div className={styles.action}>
            <img src='/img/icon-share.png' />
          </div>
          <div className={`${styles.action} ${styles.last}`}>
            <img src='/img/icon-bookmark.png' />
          </div>
        </div>
        <div className={styles.row}>
          <p>
            <span>975 likes</span>
          </p>
        </div>
        <div className={styles.row}>
          <p>
            <span>{props.name} </span>
            {props.postText}
          </p>
        </div>
      </div>
    </>
  )
}

export default Card
