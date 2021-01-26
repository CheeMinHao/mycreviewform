const express = require('express')
const next = require('next')
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/api/v1/review', async (req, res) => {
    const review = await prisma.review.findMany()
    res.json(review)
})

app.post(`/api/v1/review`, async (req, res) => {
    // const { name, email, purchase, review, img, vid } = req.body
    const result = await prisma.review.create({
      data: {
        // name,
        // email,
        // purchase,
        // review,
        // img,
        // vid
        ...req.body
      },
    })
    res.json(result)
})

app.listen(3000, () =>
console.log('REST API server ready at: http://localhost:3000'),
)



// const next = require('next')
// const express = require('express');
// const bodyParser = require('body-parser')


// const dev = process.env.NODE_ENV !== 'production'
// const app = next({dev})
// const handle = app.getRequestHandler()

// const fs = require('fs')
// const path = require('path');
// const filePath = './data.json'
// const reviewData = require(filePath)

// app.prepare().then(() => {
//     const server = express();
//     server.use(bodyParser.json())

//     server.get('/api/v1/reviews', (req, res) => {
//         return res.json(reviewData)
//     })

//     server.post('/api/v1/reviews', (req, res) => {
//         const review = req.body
//         reviewData.push(review)

//         const pathToFile = path.join(__dirname, filePath)

//         const stringifiedData = JSON.stringify(reviewData, null, 2)

//         fs.writeFile(pathToFile, stringifiedData, (error) => {
//             if (error) {
//                 return res.status(422).send(error)
//             }

//             return res.json(review)
//         })
//     })


//     server.get('*', (req, res) => {
//         return handle(req, res)
//     })

//     const PORT = process.env.PORT || 3000;

//     server.listen(PORT, (err) => {
//         if (err) throw err
//         console.log('> Ready on port ' + PORT)
//     })
// })