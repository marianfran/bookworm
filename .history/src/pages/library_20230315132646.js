import { prisma } from '../../server/db/client'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

/* Components */
import PostForm from '../../components/postform'
import MenuAppBar from '../../components/navbar'
import { Book } from '../../components/book'

export default function Library({posts}){

    /* Session */
    const { data: session } = useSession()

    /* Posts */
    const handleSubmit = async ({ title, author }) => {
        const { data } = await axios.post('/api/posts', {
            title,
            author,
        })
        console.log(data)
}

    return(
        <div classname={styles.container}>

            <MenuAppBar 
            user={session?.user}
            onSignIn={signIn}
            onSignOut={signOut}
            src={session?.user?.image}
            />

            <div className={styles.main}>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <h2 className="text-2xl font-bold tracking-tight text-blue-900">Write your Book List</h2>
                        <PostForm onSubmit={handleSubmit} />


                        {posts.map((post) => (
                        <Book key={post.id} name={post.name} book={post.bookdesc} date={post.createdAt} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
// export async function getServerSideProps() {

    
//     // const posts = await prisma.post.findMany({
//     //   orderBy: {  createdAt: 'desc' },
//     // })
  
//     return {
//       props: {
//         posts: JSON.parse(JSON.stringify(posts)),
//       }
//     }
//   }
