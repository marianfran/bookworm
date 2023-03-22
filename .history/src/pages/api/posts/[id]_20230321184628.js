import { getSession } from 'next-auth/client'
import { prisma } from '../../../server/db/client'

// // DELETE /api/post/:id
export default async function handle(req, res) {
  const postId = req.query.id
  const session = await getSession({ req })
  const result = await prisma.post.delete({
    where: { id: Number(postId) },
    select: { author: { select: { email: true } } },
  })
  const authorEmail = result.author.email

  if (session?.user?.email !== authorEmail) {
    return res.status(403).send('Not authorized')
  }

  const post = await prisma.post.delete({
    where: { id: Number(postId) },
  })
  res.json(post)
}
