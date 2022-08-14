import { ObjectId } from 'mongodb'

export interface Keyword {
  _id?: ObjectId
  key: string
  message: string
}
