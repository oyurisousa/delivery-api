import { hash } from 'bcrypt'
import { prisma } from '../../../../database/prismaClient'

interface ICreateClient {
  username: string
  password: string
}

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    })

    if (clientExists) {
      throw new Error('this username already exists!')
    }
    const hashPassword = await hash(password, 10)
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    })
    return client
  }
}
