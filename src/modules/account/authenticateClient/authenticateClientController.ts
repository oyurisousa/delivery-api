import { Request, Response } from 'express'
import { AuthnticateClientUseCase } from './authenticateClientUseCase'

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const authnticateClientUseCase = new AuthnticateClientUseCase()
    const result = await authnticateClientUseCase.execute({ username, password })

    return response.json(result).status(200)
  }
}