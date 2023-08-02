import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const start = () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}`)
    )
  } catch (e) {
    console.error(e)
  }
}
