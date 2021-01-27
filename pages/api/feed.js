import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const posts = await prisma.post.findMany({
      include: {name: true},
  })
  res.json(posts)
}