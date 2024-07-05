import { compare } from "bcrypt"
import { prisma } from "../../../database/prismaClient"
import { sign } from "jsonwebtoken"

interface IAuthenticateDeliveryman {
  username: string
  password: string
}

export class AuthenticateDeliverymanUseCase {
  async execute({ password, username }: IAuthenticateDeliveryman) {

    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    })

    if (!deliveryman) {
      throw new Error('username not or password invalid!')
    }

    const passwordMatch = await compare(password, deliveryman.password)

    if (!passwordMatch) {
      throw new Error('username not or password invalid!')
    }

    const token = await sign({ username }, '158193559058d796c2a922037b217daa', {
      expiresIn: "1d",
      subject: deliveryman.id
    })

    return {
      token
    }
  }
}