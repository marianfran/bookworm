import styles from '@/styles/Post.module.css'
export function Book( props ) {

    return (
        <div key={props.key} className={styles.book}>
            <h3>{props.name}</h3>
            <p>Author: {props.author}</p>
            <p>Genre: {props.category}</p>
        </div>
    )
}