import { compare } from "bcrypt"
import { prisma } from "../../../database/prismaClient"
import { sign } from "jsonwebtoken"

interface IAuthenticateClient {
  username: string
  password: string
}

export class AuthnticateClientUseCase {
  async execute({ password, username }: IAuthenticateClient) {

    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if (!client) {
      throw new Error('username not or password invalid!')
    }

    const passwordMatch = await compare(password, client.password)

    if (!passwordMatch) {
      throw new Error('username not or password invalid!')
    }

    const token = await sign({ username }, '158193559058d796c2a922037b217daa', {
      expiresIn: "1d",
      subject: client.id
    })

    return {
      token
    }
  }
}