import styles from '@/styles/Post.module.css'
import ButtonApp from '../../components/button'

export default function Book( props ) {

    return (
        <div className={styles.book}>
            <h3 className={styles.title}>{props.name}</h3>
            <p className={styles.author}>{props.author}</p>
            <p className={styles.genre}>{props.category}</p>

            <div className={styles.bookbtns}>
                <ButtonApp name='Update' onClick={props.onClickUpdate}/>
                <ButtonApp name='Delete' onClick={props.onClickDelete}/>
            </div>
        </div>
    )
}