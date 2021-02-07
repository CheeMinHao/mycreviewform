import prisma from '../../lib/prisma'
var dateFormat = require('dateformat')

export default async function handle(req, res) {
    const {name, email, purchase, answer, review, img, vid} = req.body
    const result = await prisma.review_form.create({
        data: {
          name: name,
          email: email,
          purchase: dateFormat(purchase, "dd/mm/yyyy"),
          radio: answer,
          review: review,
          img: img,
          vid: vid,
        },
      })
    res.json(result)
}

