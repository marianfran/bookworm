import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"

import MenuAppBar from "../../components/navbar"
import styles from '@/styles/Home.module.css'

export default function Component() {

  const { data: session } = useSession()

  if (session) {
    return (
        <div>
            <MenuAppBar 
                user={session?.user}
                onSignIn={signIn}
                onSignOut={signOut}
                src={session?.user?.image}
            />
            Signed in as {session.user.email} <br />
            <img src={session.user.image} />
            <p>{session.user.name}</p>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    )
  }
  return (
    <div className={styles.main}>
        <MenuAppBar />
        <h3>Uh-oh! Looks like you are not signed in yet</h3> <br />
        <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}

// export async function getServerSideProps(context) {
//     const session = await getServerSession(context.req, context.res, authOptions)

//     if (!session) {
//         return {
//         redirect: {
//             destination: "/api/auth/signin",
//             permanent: false,
//             },
//         }
//     }

//   return {
//     props: { session },
//   }
// }