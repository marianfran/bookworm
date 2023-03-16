import styles from '@/styles/Home.module.css'

export function Book( props ) {

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    return (
        <div key={props.id} className={styles.book}>
            <h1 style={{fontWeight: 'bold'}}>{props.name}</h1>
            <p>{props.bookdesc}</p>
            <p className={styles.date}>{formatDate(props.date)}</p>
        </div>
    )
}