import express, { urlencoded } from "express"
import { routes } from "./routes"

const app = express()
app.use(express.json())
// app.use(urlencoded({
//   extended: true,
// }))

app.use(routes)


app.listen(3333, () => [
  console.log("is running...")
])