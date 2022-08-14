import 'dotenv/config'
import { MongoClient } from 'mongodb'
import { Keyword } from '../types/keyword'

let client: MongoClient

const connect = async () => {
  if (!client) {
    client = new MongoClient(process.env.DB_URI)
    await client.connect()
  }
}

export default async () => {
  await connect()
  const db = client.db('discord')
  return {
    keywords: db.collection<Keyword>('keywords')
  }
}
