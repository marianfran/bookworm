import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <Head>
      <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>

      <body>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
        Signed in as {session.user.email} <br />
        <img src={session.user.image} />
        <p>{session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
       </body>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
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