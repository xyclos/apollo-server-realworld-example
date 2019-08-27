import 'reflect-metadata'
import { createConnection } from 'typeorm'

export default {
  connection: createConnection().catch(err => console.error(err))
}
