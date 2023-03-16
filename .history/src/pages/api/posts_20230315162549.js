import { prisma } from '../../../server/db/client'

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { title, author } = req.body;

        const post = await prisma.post.create({
          data: {
            title,
            author
          }
        });

        res.status(201).json(post);
      } catch (error) {
        res.status(500).json({ error: 'Unable to create post' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}


// export default async function handler(req, res) {
//     const { method } = req;

//     switch (method) {
//         case 'POST':

//         const { title, author } = req.body;
//         const post = await prisma.post.create({
//             data: {
//                 title,
//                 author,
//             },
//         });
//             //Update or create data in your database
//             res.status(201).json(post)
//             break
//         default:
//             res.setHeader('Allow', ['POST'])
//             res.status(405).end(`Method ${method} Not Allowed`)
//     }
// }

// // import { prisma } from "../../server/db/client"
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// export default async function handle(req, res) {
//   const { method } = req

//   switch (method) {
//     case 'POST':
//       // get the title and content from the request body
//       const { title, content } = req.body
//       // use prisma to create a new post using that data
//       const post = await prisma.post.create({
//         data: {
//           title,
//           author,
//           genre,
//         }
//       })
//       // send the post object back to the client
//       res.status(201).json(post)
//       break
//     default:
//       res.status(405).end(`Method ${method} Not Allowed`)
//   }
// }