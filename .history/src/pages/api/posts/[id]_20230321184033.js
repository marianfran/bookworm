// DELETE /api/post/:id
export default async function handle(req, res) {
  const postId = req.query.id
  const session = await getSession({ req })
  const post = await prisma.post.delete({
    where: { id: Number(postId) },
  })
  res.json(post)
}

export async function getServerSideProps(context) {
  const session = await getSession({ req })

  if (!session) {    
    return {
      redirect: {
        destination: '/api/auth/signin', 
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

