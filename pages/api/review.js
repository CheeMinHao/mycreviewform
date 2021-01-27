import prisma from '../../lib/prisma'

export default async function handle(req, res) {
    const {name, email, purchase, review, img, vid} = req.body
    const result = await prisma.post.create({
        data: {
          name: name,
          email: email,
          purchase: purchase,
          review: review,
          img: img,
          vid: vid,
        },
      })
    res.json(result)
}

