import express from 'express'
const app = express()
const port =process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('my name is wasif')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
