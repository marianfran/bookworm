import styles from '@/styles/Home.module.css'

export function Book( props ) {

    // function formatDate(string){
    //     var options = { year: 'numeric', month: 'long', day: 'numeric' };
    //     return new Date(string).toLocaleDateString([],options);
    // }

    return (
        <div key={props.key} className={styles.book}>
            <h1 style={{fontWeight: 'bold'}}>{props.name}</h1>
            <p>{props.author}</p>
        </div>
    )
}