import prisma from '../../lib/prisma'

export default async function handle(req, res) {
    const {name, email, purchase, answer, review, img, vid} = req.body
    const result = await prisma.review_form.create({
        data: {
          name: name,
          email: email,
          purchase: purchase_date,
          radio: answer,
          review: review,
          img: img,
          vid: vid,
        },
      })
    res.json(result)
}

