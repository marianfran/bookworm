import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import MenuAppBar from "../../components/navbar"
import ButtonApp from '../../components/button'
import styles from '@/styles/Home.module.css'
import Lottie from "lottie-react";
import dancingbook from "../../public/dancingbook.json";

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

            <div className={styles.profilecontainer}>
              <h1>My Profile</h1>
              <img className={styles.avatarimg} src={session.user.image} />
              <h2>{session.user.name}<h2>
              {session.user.email} 
              <ButtonApp name='Logout' onClick={() => signOut()}></ButtonApp>
            </div>
        </div>
    )
  }
  return (
    <div className={styles.container}>
        <MenuAppBar />

        <div className={styles.main}>
          <h3>Uh-oh! Looks like you are not signed in yet</h3> <br />
            <div className={styles.lottie}>
              <Lottie animationData={dancingbook} width={100} height={100} />
            </div>
          <ButtonApp name='Sign In' onClick={() => signIn()}></ButtonApp>
        </div>
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