import { prisma } from '../../server/db/client'

function titleFromCode(code) {
  return code.trim().split('\n')[0].replace('// ', '')
}

export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'POST':
      const {language, code} = req.body
      const title = titleFromCode(code)
      const post = await prisma.post.create({
        data: {
          title,
          language,
          code,
        },
      })
      res.status(201).json(post)
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

// THE OG
// import { prisma } from '../../../server/db/client'

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