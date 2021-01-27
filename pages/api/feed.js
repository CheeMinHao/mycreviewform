import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const posts = await prisma.review_form.findMany({
      include: {name: true},
  })
  res.json(posts)
}