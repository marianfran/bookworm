import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter }  from 'next/router'
import MenuAppBar from "../../components/navbar"
import ButtonApp from '../../components/button'
import styles from '@/styles/Home.module.css'
import Lottie from "lottie-react";
import dancingbook from "../../public/dancingbook.json";
import Image from 'next/image'

export default function Component() {

  const router = useRouter()

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
              <Image className={styles.avatarimg} src={session.user.image} />
              <h2 className={styles.profileheading}>{session.user.name}</h2>
              <p className={styles.profileemail}> {session.user.email} </p>


              <ButtonApp 
                name="Go to Library"
                onClick={()=>router.push('/library')}
              />

              <ButtonApp name='Logout' onClick={() => signOut()} />
            </div>
        </div>
    )
  }
  return (
    <div className={styles.container}>
        <MenuAppBar />

        <div className={styles.main}>
          
            <div className={styles.lottie}>
              <Lottie animationData={dancingbook} width={100} height={100} />
            </div>
            <h3>Uh-oh! Looks like you are not signed in yet</h3> 
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