import { Request, Response } from 'express'
import { CreateClientUseCase } from './createClientUseCase'

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const creatClientUseCase = new CreateClientUseCase()
    const result = await creatClientUseCase.execute({ username, password })

    return response.json(result).status(201)
  }
}
