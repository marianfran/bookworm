import styles from '@/styles/Post.module.css'
export function Book( props ) {

    return (
        <div key={props.key} className={styles.book}>
            <h3 className={styles.title}>{props.name}</h3>
            <p className={styles.author}>Author: {props.author}</p>
            <p className={styles.genre}>Genre: {props.category}</p>
        </div>
    )
}