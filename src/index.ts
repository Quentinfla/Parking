import { Hono } from 'hono'
import {genererateRandomNumberId} from "./utils/genereateRandomNumberId";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app

