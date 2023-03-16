import styles from '@/styles/Home.module.css'
export function Book( props ) {

    return (
        <div key={props.key} className={styles.book}>
            <h1>{props.name}</h1>
            <p>{props.author}</p>
        </div>
    )
}