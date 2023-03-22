import styles from '@/styles/Post.module.css'
import ButtonApp from '../../components/button'
export function Book( props ) {

    return (
        <div className={styles.book}>
            <h3 className={styles.title}>{props.name}</h3>
            <p className={styles.author}>{props.author}</p>
            <p className={styles.genre}>{props.category}</p>

            <div className={styles.bookbtns}>
                <ButtonApp name='Update'/>
                <ButtonApp name='Complete'/>
            </div>
        </div>
    )
}